import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createLead } from "./db";
import { sendEmail, generateLeadMagnetEmailTemplate, generateAdminNotificationTemplate } from "./_core/email";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    getAll: publicProcedure
      .query(async () => {
        try {
          const allLeads = await getAllLeads();
          return allLeads;
        } catch (error) {
          console.error("[API] Failed to fetch leads:", error);
          throw new Error("Failed to fetch leads");
        }
      }),
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name must be at least 2 characters"),
          mobile: z.string().min(10, "Mobile must be at least 10 digits"),
          email: z.string().email("Invalid email address"),
          companyName: z.string().min(1, "Company name is required"),
          designation: z.string().min(1, "Designation is required"),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          await createLead({
            name: input.name,
            mobile: input.mobile,
            email: input.email,
            companyName: input.companyName,
            designation: input.designation,
            leadMagnetType: "ceo-intel-alerts-guide",
          });

          // Send email with guide link
          const protocol = ctx.req.protocol || "https";
          const host = ctx.req.get("host") || "wellbeeng.com";
          const guideUrl = `${protocol}://${host}/resources/CEO_Intel_Alerts_Guide_Cleaned_Final_464b070e.pdf`;
          const consultationUrl = `${protocol}://${host}/consultation`;
          const emailTemplate = generateLeadMagnetEmailTemplate(
            input.name,
            guideUrl,
            consultationUrl
          );

          const emailSent = await sendEmail({
            to: input.email,
            subject: "Your CEO Intel Alerts Guide - Early Warning System for Business Success",
            html: emailTemplate,
          });

          if (!emailSent) {
            console.warn("[API] Email sending failed for lead:", input.email);
            // Don't throw error - lead was still created successfully
          }

          // Send admin notification to both admins
          const adminEmails = ["nevildarukhanawala02@gmail.com", "rkknet@yahoo.com"];
          const adminTemplate = generateAdminNotificationTemplate(input);
          
          for (const adminEmail of adminEmails) {
            const adminEmailSent = await sendEmail({
              to: adminEmail,
              subject: `New Lead Submission: ${input.name} from ${input.companyName}`,
              html: adminTemplate,
            });
            
            if (!adminEmailSent) {
              console.warn("[API] Admin notification failed for:", adminEmail);
            } else {
              console.log("[API] Admin notification sent to:", adminEmail);
            }
          }

          return { 
            success: true, 
            message: "Lead submitted successfully",
            emailSent 
          };
        } catch (error) {
          console.error("[API] Failed to submit lead:", error);
          throw new Error("Failed to submit lead. Please try again.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
