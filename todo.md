# Project TODO

## Lead Magnet Implementation (CEO Intel Playbook)

- [x] Add leads table to database schema (name, mobile, email, companyName, designation, leadMagnetType)
- [x] Push database migration (`pnpm db:push`)
- [x] Create `createLead` helper function in `server/db.ts`
- [x] Add `leads.submit` tRPC procedure in `server/routers.ts` with Zod validation
- [x] Update `LeadMagnetModal` component to use tRPC mutation instead of simulated delay
- [x] Integrate LeadMagnetModal into "How It Works" page
- [x] Add comprehensive vitest tests for lead submission (7 test cases)
- [x] Verify all tests pass (8 tests passing)
- [x] Build project successfully

## Completed Features (Previous Sessions)

- [x] Upgraded project to `web-db-user` for database and server capabilities
- [x] Redesigned "How It Works" page with platform-first messaging (30-45 days implementation)
- [x] Enhanced Rajesh's profile with professional credentials and clients section
- [x] Updated "Featured In" section with actual article links
- [x] Removed email ID from footer to funnel contacts through form
- [x] Enhanced contact form with validation, industry dropdown, and success popup
- [x] Restored interactive HTML animation demo on Demo page
- [x] Replaced all "CNC machine" references with "Laser Plasma Cutters"
- [x] Created LeadMagnetModal component for lead data collection
- [x] Integrated Lead Magnet section into "How It Works" page

## Recent Updates

- [x] Updated Smart Commerce case study card on Home page to use generic "eCommerce" instead of "Jewellery"
- [x] Removed "In 7 Days" commitment from Smart Commerce headline
- [x] Changed headline to "Product Data In. Full eCommerce Business Out."
- [x] Updated description to "Product images and SKUs transform into a complete, launch-ready eCommerce platform—fast."
- [x] Updated Lead Magnet from "CEO Intel Implementation Playbook" to "CEO Intel Alerts Guide"
- [x] Updated Lead Magnet description to focus on early-warning alerts, detection, and crisis prevention
- [x] Updated modal button text from "Download Now" to "Download Guide"
- [x] Updated success message to reference CEO Intel Alerts Guide
- [x] Updated database schema default lead magnet type to "ceo-intel-alerts-guide"
- [x] Pushed database migration for lead magnet type change

## PDF Download Integration

- [x] Uploaded CEO Intel Alerts Guide PDF to webdev storage
- [x] Added Download icon import to LeadMagnetModal
- [x] Added PDF download link in success message after form submission
- [x] Users can now download guide immediately after submitting their information
- [x] Removed all references to startupaiadvantage from PDF
- [x] Reuploaded cleaned guide to webdev storage
- [x] Updated LeadMagnetModal to use cleaned PDF (CEO_Intel_Alerts_Guide_Cleaned_1698a502.pdf)

## Case Study Page Updates

- [x] Changed "Jewellery" badge to generic "eCommerce" on case study page
- [x] Removed "In 7 Days" from case study headline
- [x] Updated "No Shopify" text to "Platform-agnostic architecture"
- [x] Changed timeline section from specific "7 days" to generic "weeks"
- [x] Updated CTA copy to remove time commitment references

## Email Sending Integration

- [x] Installed nodemailer package for email sending
- [x] Created email service helper (server/_core/email.ts)
- [x] Generated HTML email template for lead magnet
- [x] Updated routers.ts to send email on lead submission
- [x] Email includes guide download link and consultation CTA
- [x] Updated modal copy to mention email delivery
- [x] Graceful error handling if email fails (lead still created)

## Next Steps (Optional Enhancements)

- [ ] Configure SMTP credentials (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
- [ ] Create admin dashboard to view submitted leads
- [ ] Add lead scoring based on company size/designation
- [ ] Add analytics tracking for lead magnet conversions
- [ ] Implement follow-up email sequence (3-email automation)

## Email Debugging & PDF Cleanup (Latest)

- [x] Re-cleaned PDF to remove all StartupAI references from all 25 pages
- [x] Uploaded new cleaned PDF to webdev storage (CEO_Intel_Alerts_Guide_Cleaned_Final_464b070e.pdf)
- [x] Updated LeadMagnetModal to use new cleaned PDF URL
- [x] Updated routers.ts email template to link to new cleaned PDF
- [x] Added comprehensive debug logging to email service
- [x] Logs SMTP configuration status (host, port, user, pass)
- [x] Logs recipient email and email response details
- [x] Improved error handling with detailed error messages and stack traces
- [x] All 9 tests passing with updated email service

## Known Issues & Solutions

- Email not being received: Currently using Ethereal test account (development mode)
  - Solution: Configure SMTP credentials via environment variables (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
  - Logs will show "SMTP not configured - using Ethereal test account" if credentials not set
  - Test emails can be previewed via Ethereal preview URL in server logs


## Admin Notifications (Latest)

- [x] Added admin notification functionality to lead submission
- [x] Notifications sent to nevildarukhanawala02@gmail.com and rkknet@yahoo.com
- [x] Created generateAdminNotificationTemplate function with professional HTML email
- [x] Admin email includes lead details: Name, Email, Mobile, Company, Designation
- [x] Admin email includes timestamp (IST timezone)
- [x] Added link to admin dashboard in notification
- [x] Updated routers.ts to send admin notifications for each submitted lead
- [x] Updated test mocks to include admin notification template
- [x] All 9 tests passing with admin notification functionality


## Admin Dashboard (Latest)

- [x] Created AdminDashboard page component at /admin route
- [x] Added getAllLeads() function to server/db.ts
- [x] Added leads.getAll tRPC procedure to fetch all leads
- [x] Built responsive leads table with Name, Email, Mobile, Company, Designation
- [x] Added lead submission timestamp (IST timezone)
- [x] Added lead magnet type badge (CEO Intel Alerts Guide)
- [x] Integrated with DashboardLayout for consistent admin UI
- [x] Added summary stats (Total Leads, Latest Submission, Lead Magnet Type)
- [x] Added clickable email and phone links for quick contact
- [x] Added copy-to-clipboard action for lead details
- [x] All 9 tests passing
