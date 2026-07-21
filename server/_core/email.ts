import nodemailer from "nodemailer";

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    path: string;
    contentType?: string;
  }>;
};

/**
 * Send email using configured SMTP service
 * Falls back gracefully if email service is not configured
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  try {
    // For development/testing, use a test account if no SMTP is configured
    let transporter;

    // Check if we have SMTP configuration via environment
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || "noreply@wellbeeng.com";

    console.log("[Email Service] Checking SMTP configuration...");
    console.log("[Email Service] SMTP_HOST:", smtpHost ? "configured" : "NOT configured");
    console.log("[Email Service] SMTP_PORT:", smtpPort ? "configured" : "NOT configured");
    console.log("[Email Service] SMTP_USER:", smtpUser ? "configured" : "NOT configured");
    console.log("[Email Service] SMTP_PASS:", smtpPass ? "configured" : "NOT configured");
    console.log("[Email Service] Recipient:", payload.to);

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      // Use configured SMTP
      console.log("[Email Service] Using configured SMTP server");
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
    } else {
      // Use Ethereal test account for development
      console.log("[Email Service] SMTP not configured - using Ethereal test account for development");
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const info = await transporter.sendMail({
      from: smtpFrom,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      attachments: payload.attachments,
    });

    console.log("[Email] Message sent successfully:", info.messageId);
    console.log("[Email] Response:", info.response);

    // Log preview URL for test accounts
    if (!smtpHost) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log("[Email] Preview URL (Ethereal test account):", previewUrl);
    }

    return true;
  } catch (error) {
    console.error("[Email] Failed to send email:", error);
    if (error instanceof Error) {
      console.error("[Email] Error message:", error.message);
      console.error("[Email] Error stack:", error.stack);
    }
    return false;
  }
}

/**
 * Generate HTML email template for lead magnet download
 */
export function generateLeadMagnetEmailTemplate(
  name: string,
  guideUrl: string,
  consultationUrl: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
          }
          .header h1 {
            color: #1a1a1a;
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px 0;
          }
          .greeting {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
          }
          .cta-button {
            display: inline-block;
            background-color: #06b6d4;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 20px 0;
            transition: background-color 0.3s;
          }
          .cta-button:hover {
            background-color: #0891b2;
          }
          .secondary-cta {
            display: inline-block;
            background-color: #f0f0f0;
            color: #333;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 20px 10px 20px 0;
          }
          .secondary-cta:hover {
            background-color: #e0e0e0;
          }
          .footer {
            border-top: 2px solid #f0f0f0;
            padding-top: 20px;
            font-size: 12px;
            color: #999;
            text-align: center;
          }
          .divider {
            height: 1px;
            background-color: #f0f0f0;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Wellbeeng Technologies</h1>
          </div>
          
          <div class="content">
            <p class="greeting">Hi ${name},</p>
            
            <p>Thank you for downloading the <strong>CEO Intel Alerts Guide</strong>! This practical guide covers the early-warning alerts built into CEO Intel and how to act on them before a problem becomes a crisis.</p>
            
            <p><strong>What's Inside:</strong></p>
            <ul>
              <li>Alert types that matter most for Indian businesses</li>
              <li>How to read and respond to each alert category</li>
              <li>Setting thresholds that match your business rhythm</li>
            </ul>
            
            <p>The guide is ready for download below. You can also access it anytime using the button.</p>
            
            <div style="text-align: center;">
              <a href="${guideUrl}" class="cta-button">Download Guide</a>
            </div>
            
            <div class="divider"></div>
            
            <p><strong>Ready to see CEO Intel in action?</strong></p>
            <p>Schedule a personalized demo to understand how early-warning alerts can transform your business decision-making.</p>
            
            <div style="text-align: center;">
              <a href="${consultationUrl}" class="secondary-cta">Book Free Consultation</a>
            </div>
            
            <div class="divider"></div>
            
            <p>If you have any questions about the guide or CEO Intel, feel free to reach out. We're here to help!</p>
            
            <p>Best regards,<br><strong>Wellbeeng Technologies Team</strong></p>
          </div>
          
          <div class="footer">
            <p>&copy; 2026 Wellbeeng Technologies. All rights reserved.</p>
            <p>This email was sent to ${name} because you downloaded the CEO Intel Alerts Guide.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}


/**
 * Generate HTML email template for admin notification when lead submits
 */
export function generateAdminNotificationTemplate(leadData: {
  name: string;
  email: string;
  mobile: string;
  companyName: string;
  designation: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 3px solid #ff6b35;
          }
          .header h1 {
            color: #1a1a1a;
            margin: 0;
            font-size: 24px;
          }
          .alert-badge {
            display: inline-block;
            background-color: #ff6b35;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 14px;
            margin-top: 10px;
          }
          .content {
            padding: 30px 0;
          }
          .lead-info {
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
          }
          .info-row {
            display: flex;
            margin-bottom: 12px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 12px;
          }
          .info-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .info-label {
            font-weight: 600;
            color: #666;
            width: 120px;
            flex-shrink: 0;
          }
          .info-value {
            color: #333;
            word-break: break-all;
          }
          .action-button {
            display: inline-block;
            background-color: #ff6b35;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 20px 0;
          }
          .action-button:hover {
            background-color: #e55a28;
          }
          .footer {
            border-top: 2px solid #f0f0f0;
            padding-top: 20px;
            font-size: 12px;
            color: #999;
            text-align: center;
          }
          .timestamp {
            font-size: 12px;
            color: #999;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Wellbeeng Technologies</h1>
            <div class="alert-badge">🔔 NEW LEAD SUBMISSION</div>
          </div>
          
          <div class="content">
            <p>Hi Admin,</p>
            
            <p>A new lead has submitted the <strong>CEO Intel Alerts Guide</strong> form. Here are the details:</p>
            
            <div class="lead-info">
              <div class="info-row">
                <div class="info-label">Name:</div>
                <div class="info-value"><strong>${leadData.name}</strong></div>
              </div>
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value"><a href="mailto:${leadData.email}">${leadData.email}</a></div>
              </div>
              <div class="info-row">
                <div class="info-label">Mobile:</div>
                <div class="info-value"><a href="tel:${leadData.mobile}">${leadData.mobile}</a></div>
              </div>
              <div class="info-row">
                <div class="info-label">Company:</div>
                <div class="info-value"><strong>${leadData.companyName}</strong></div>
              </div>
              <div class="info-row">
                <div class="info-label">Designation:</div>
                <div class="info-value">${leadData.designation}</div>
              </div>
            </div>
            
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>Review the lead information above</li>
              <li>The lead has been sent the CEO Intel Alerts Guide PDF</li>
              <li>Follow up with a consultation call or email</li>
              <li>Track lead status in your admin dashboard</li>
            </ul>
            
            <div style="text-align: center;">
              <a href="https://wellbeeng.com/admin/leads" class="action-button">View All Leads</a>
            </div>
            
            <div class="timestamp">
              <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>&copy; 2026 Wellbeeng Technologies. All rights reserved.</p>
            <p>This is an automated admin notification. Do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
