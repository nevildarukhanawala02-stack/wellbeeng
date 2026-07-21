# Wellbeeng Website - Deployment Guide for GoDaddy Hosting

## Overview

This is a complete backup of the Wellbeeng website including frontend, backend, database schema, and all assets. This guide will help you deploy it on GoDaddy shared hosting.

## System Requirements

- **Node.js**: 18.x or higher
- **npm/pnpm**: Package manager
- **MySQL**: 5.7 or higher (provided by GoDaddy)
- **Git**: For version control (optional)

## Project Structure

```
wellbeeng/
├── client/                 # React frontend
├── server/                 # Node.js backend (tRPC)
├── drizzle/                # Database schema & migrations
├── dist/                   # Built production files
├── package.json            # Dependencies
├── .env.example            # Environment template
└── DEPLOYMENT_GUIDE.md     # This file
```

## Step 1: Set Up GoDaddy Hosting

### 1.1 Create MySQL Database

1. Log in to **GoDaddy cPanel**
2. Go to **MySQL Databases**
3. Create a new database (e.g., `wellbeeng_db`)
4. Create a database user with password
5. Add user to database with all privileges
6. Note the credentials:
   - **Host**: Usually `localhost`
   - **Database**: Your database name
   - **Username**: Your database user
   - **Password**: Your password

### 1.2 Set Up Node.js Environment

1. In cPanel, go to **Node.js**
2. Create a new Node.js application:
   - **App name**: wellbeeng
   - **Node.js version**: 18.x or higher
   - **App URL**: wellbeeng.com (or subdomain)
   - **App startup file**: `dist/index.js`
3. Note the **port number** assigned (e.g., 3000)

## Step 2: Upload Project Files

### 2.1 Via FTP/SFTP

1. Download the project ZIP file
2. Extract it locally
3. Connect via FTP/SFTP using GoDaddy credentials
4. Upload all files to your application directory

### 2.2 Via Git (Recommended)

```bash
# Clone or push to a Git repository
git init
git add .
git commit -m "Initial commit"
git push origin main
```

Then pull from GoDaddy server:

```bash
cd /path/to/app
git clone <your-repo-url> .
```

## Step 3: Configure Environment Variables

### 3.1 Create .env File

1. Copy `.env.example` to `.env`
2. Update the following variables:

```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/wellbeeng_db"

# Node Environment
NODE_ENV=production

# Server Port (from GoDaddy Node.js setup)
PORT=3000

# JWT Secret (generate a random string)
JWT_SECRET="your-random-secret-key-here"

# OAuth Configuration (if using Manus OAuth)
VITE_APP_ID="your-app-id"
OAUTH_SERVER_URL="https://oauth.manus.im"
VITE_OAUTH_PORTAL_URL="https://login.manus.im"

# Email Configuration (GoDaddy Mail)
SMTP_HOST="mail.wellbeeng.com"
SMTP_PORT=587
SMTP_USER="nevil@wellbeeng.com"
SMTP_PASS="your-email-password"
SMTP_FROM="nevil@wellbeeng.com"

# Admin Notification Emails
ADMIN_EMAILS="nevildarukhanawala02@gmail.com,rkknet@yahoo.com"

# Frontend URLs
VITE_APP_TITLE="Wellbeeng Technologies"
VITE_APP_LOGO="/logo.png"
```

### 3.2 Secure .env File

Add `.env` to `.gitignore` to prevent accidental commits:

```
# .gitignore
.env
.env.local
.env.*.local
```

## Step 4: Install Dependencies & Build

### 4.1 SSH into Server

```bash
ssh username@wellbeeng.com
cd /path/to/app
```

### 4.2 Install & Build

```bash
# Install dependencies
pnpm install
# or
npm install

# Generate database migrations
pnpm db:push
# or
npm run db:push

# Build for production
pnpm run build
# or
npm run build
```

## Step 5: Start the Application

### 5.1 Via GoDaddy cPanel

1. Go to **Node.js Applications**
2. Find your app and click **Start**
3. Verify it's running

### 5.2 Via Command Line

```bash
cd /path/to/app
npm start
# or if using PM2 (recommended for production)
pm2 start dist/index.js --name wellbeeng
pm2 save
```

## Step 6: Configure Domain & SSL

### 6.1 Point Domain to Application

1. In cPanel, go to **Addon Domains** or **Domains**
2. Point `wellbeeng.com` to your Node.js application directory
3. Enable SSL (AutoSSL or Let's Encrypt)

### 6.2 Add www Subdomain

1. In GoDaddy DNS settings, add CNAME record:
   - **Name**: `www`
   - **Points to**: `wellbeeng.com`
   - **TTL**: 3600

## Step 7: Database Setup

### 7.1 Import Schema

If you have a database dump:

```bash
mysql -u username -p database_name < backup.sql
```

Or use Drizzle migrations:

```bash
pnpm db:push
```

### 7.2 Verify Database Connection

Test the connection:

```bash
mysql -h localhost -u username -p -e "USE wellbeeng_db; SHOW TABLES;"
```

## Step 8: Email Configuration

### 8.1 GoDaddy Email Setup

1. Create email accounts in cPanel:
   - `nevil@wellbeeng.com`
   - `admin@wellbeeng.com` (optional)

2. Update SMTP credentials in `.env`:
   - **SMTP_HOST**: `mail.wellbeeng.com`
   - **SMTP_PORT**: 587 (TLS) or 465 (SSL)
   - **SMTP_USER**: `nevil@wellbeeng.com`
   - **SMTP_PASS**: Your email password

### 8.2 Test Email Sending

Submit a test lead form to verify emails are being sent to:
- Lead email (with PDF guide)
- Admin emails (notification)

## Step 9: Monitoring & Maintenance

### 9.1 View Logs

```bash
# Application logs
tail -f /path/to/app/logs/app.log

# Error logs
tail -f /path/to/app/logs/error.log
```

### 9.2 Restart Application

```bash
# Via cPanel Node.js manager
# Or via command line:
pm2 restart wellbeeng
```

### 9.3 Database Backups

Schedule regular backups in cPanel:
1. Go to **Backup**
2. Set up automatic backups
3. Download backups regularly

## Troubleshooting

### Issue: Application Won't Start

**Solution**: Check logs in cPanel Node.js section or SSH logs

```bash
pm2 logs wellbeeng
```

### Issue: Database Connection Error

**Solution**: Verify DATABASE_URL in .env

```bash
# Test connection
mysql -h localhost -u username -p -e "SELECT 1;"
```

### Issue: Emails Not Sending

**Solution**: Verify SMTP credentials and firewall rules

```bash
# Test SMTP connection
telnet mail.wellbeeng.com 587
```

### Issue: Leads Not Appearing in Admin Dashboard

**Solution**: Verify database tables exist

```bash
mysql -u username -p wellbeeng_db -e "DESCRIBE leads;"
```

## API Endpoints

Once deployed, your API will be available at:

- **Frontend**: `https://wellbeeng.com`
- **API**: `https://wellbeeng.com/api/trpc`
- **Admin Dashboard**: `https://wellbeeng.com/admin`

## Security Checklist

- [ ] Change default database password
- [ ] Set strong JWT_SECRET
- [ ] Enable HTTPS/SSL
- [ ] Set NODE_ENV=production
- [ ] Disable directory listing
- [ ] Set up firewall rules
- [ ] Enable database backups
- [ ] Monitor error logs regularly
- [ ] Keep dependencies updated

## Support & Documentation

- **Manus Docs**: https://docs.manus.im
- **Node.js Docs**: https://nodejs.org/docs
- **Drizzle ORM**: https://orm.drizzle.team
- **tRPC**: https://trpc.io

## Next Steps

1. Deploy the application
2. Test all features (lead form, email, admin dashboard)
3. Monitor logs and performance
4. Set up automated backups
5. Plan regular updates and maintenance

---

**Last Updated**: May 2026  
**Version**: 1.0  
**Support**: Contact Wellbeeng Technologies
