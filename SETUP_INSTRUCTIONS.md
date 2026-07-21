# Wellbeeng Website - GoDaddy Deployment Setup

## Quick Start Guide

This backup contains the complete Wellbeeng website ready for deployment on GoDaddy shared hosting.

### What's Included

- **Frontend**: React 19 + Tailwind CSS
- **Backend**: Node.js + Express + tRPC
- **Database**: MySQL schema with migrations
- **Features**: Lead magnet, admin dashboard, email notifications
- **Assets**: All images, PDFs, and configuration files

### Files in This Backup

```
wellbeeng/
├── DEPLOYMENT_GUIDE.md          ← START HERE (detailed instructions)
├── SETUP_INSTRUCTIONS.md        ← This file
├── client/                       ← React frontend code
├── server/                       ← Node.js backend code
├── drizzle/                      ← Database schema & migrations
├── shared/                       ← Shared types & constants
├── package.json                  ← Project dependencies
├── vite.config.ts               ← Frontend build config
├── tsconfig.json                ← TypeScript config
└── vitest.config.ts             ← Test config
```

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] GoDaddy hosting account with Node.js support
- [ ] MySQL database created in GoDaddy cPanel
- [ ] GoDaddy email account (nevil@wellbeeng.com)
- [ ] FTP/SFTP access credentials
- [ ] Domain (wellbeeng.com) configured
- [ ] SSL certificate enabled

## Deployment Steps

### 1. Create MySQL Database

1. Log in to **GoDaddy cPanel**
2. Go to **MySQL Databases**
3. Create database: `wellbeeng_db`
4. Create user with password
5. Add user to database with all privileges
6. **Save credentials** (you'll need them in .env)

### 2. Set Up Node.js Application

1. In cPanel, go to **Node.js**
2. Create new application:
   - App name: `wellbeeng`
   - Node.js version: 18.x or higher
   - App URL: `wellbeeng.com`
   - Startup file: `dist/index.js`
3. **Note the port number** (usually 3000)

### 3. Upload Project Files

**Option A: FTP/SFTP**
- Extract ZIP file locally
- Connect via FTP using GoDaddy credentials
- Upload all files to application directory

**Option B: Git (Recommended)**
```bash
git clone <your-repo-url> .
cd wellbeeng
```

### 4. Configure Environment Variables

1. Create `.env` file in project root
2. Copy values from `DEPLOYMENT_GUIDE.md` section "Step 3: Configure Environment Variables"
3. Update with your GoDaddy credentials:
   - Database URL
   - SMTP credentials (mail.wellbeeng.com)
   - JWT secret (generate random)
   - Admin emails

### 5. Install & Build

```bash
# SSH into server
ssh username@wellbeeng.com

# Navigate to app directory
cd /path/to/wellbeeng

# Install dependencies
pnpm install

# Run database migrations
pnpm db:push

# Build for production
pnpm run build
```

### 6. Start Application

**Via GoDaddy cPanel:**
- Go to Node.js Applications
- Find your app and click **Start**

**Via Command Line:**
```bash
pm2 start dist/index.js --name wellbeeng
pm2 save
```

### 7. Verify Deployment

1. Visit `https://wellbeeng.com`
2. Test lead form submission
3. Check admin dashboard at `/admin`
4. Verify emails are sent to admin addresses

## Email Configuration

### GoDaddy Mail Setup

1. Create email account in cPanel:
   - Email: `nevil@wellbeeng.com`
   - Password: Set strong password

2. Update `.env` file:
   ```
   SMTP_HOST=mail.wellbeeng.com
   SMTP_PORT=587
   SMTP_USER=nevil@wellbeeng.com
   SMTP_PASS=your-password
   ```

3. Test email sending by submitting a lead form

## Database Backup & Restore

### Export Current Database

```bash
mysqldump -u username -p wellbeeng_db > backup.sql
```

### Import to GoDaddy

```bash
mysql -u username -p wellbeeng_db < backup.sql
```

## Troubleshooting

### Application Won't Start

1. Check logs in cPanel Node.js section
2. Verify `.env` file exists and is readable
3. Check database connection: `mysql -u user -p -e "SELECT 1;"`
4. Restart application

### Database Connection Error

1. Verify DATABASE_URL in `.env`
2. Check MySQL user has database privileges
3. Test connection: `mysql -h localhost -u user -p database_name`

### Emails Not Sending

1. Verify SMTP credentials in `.env`
2. Check GoDaddy email account exists
3. Test SMTP: `telnet mail.wellbeeng.com 587`
4. Check firewall rules allow outbound SMTP

### Admin Dashboard Not Loading

1. Verify database tables exist: `SHOW TABLES;`
2. Check user is authenticated
3. Verify tRPC API is responding: `curl https://wellbeeng.com/api/trpc`

## Security Recommendations

- [ ] Use strong passwords for database and email
- [ ] Enable HTTPS/SSL certificate
- [ ] Set NODE_ENV=production
- [ ] Keep dependencies updated: `pnpm update`
- [ ] Enable database backups in cPanel
- [ ] Monitor error logs regularly
- [ ] Restrict admin dashboard access if needed

## Maintenance

### Regular Tasks

- **Weekly**: Check error logs
- **Monthly**: Update dependencies
- **Monthly**: Backup database
- **Quarterly**: Review security settings

### Update Dependencies

```bash
pnpm update
pnpm run build
pm2 restart wellbeeng
```

## Support Resources

- **DEPLOYMENT_GUIDE.md**: Detailed deployment instructions
- **GoDaddy Support**: https://www.godaddy.com/help
- **Node.js Docs**: https://nodejs.org/docs
- **Drizzle ORM**: https://orm.drizzle.team
- **tRPC**: https://trpc.io

## Next Steps

1. Follow DEPLOYMENT_GUIDE.md for step-by-step instructions
2. Deploy to GoDaddy
3. Test all features
4. Set up monitoring and backups
5. Configure custom domain and SSL

---

**Version**: 1.0  
**Last Updated**: May 2026  
**Support**: Contact Wellbeeng Technologies
