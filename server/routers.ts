import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createLead, getAllLeads, createConsultation, getAllConsultations } from "./db";
import { sendEmail, generateLeadMagnetEmailTemplate, generateAdminNotificationTemplate, generateConsultationNotificationTemplate } from "./_core/email";

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
          // Honeypot: hidden field, must stay empty. Bots that auto-fill every
          // input will trip this; real users never see or fill it.
          website: z.string().max(0).optional().or(z.literal("")),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Silently pretend success so bots don't learn the honeypot was hit.
        if (input.website) {
          console.warn("[API] Honeypot triggered on leads.submit, dropping silently");
          return { success: true, message: "Lead submitted successfully", emailSent: true };
        }
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

  consultations: router({
    getAll: publicProcedure
      .query(async () => {
        try {
          return await getAllConsultations();
        } catch (error) {
          console.error("[API] Failed to fetch consultations:", error);
          throw new Error("Failed to fetch consultations");
        }
      }),
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name must be at least 2 characters"),
          email: z.string().email("Invalid email address"),
          company: z.string().optional(),
          revenue: z.string().optional(),
          industry: z.string().optional(),
          focus: z.string().optional(),
          message: z.string().optional(),
          // Honeypot: hidden field, must stay empty. Bots that auto-fill every
          // input will trip this; real users never see or fill it.
          website: z.string().max(0).optional().or(z.literal("")),
        })
      )
      .mutation(async ({ input }) => {
        // Silently pretend success so bots don't learn the honeypot was hit.
        if (input.website) {
          console.warn("[API] Honeypot triggered on consultations.submit, dropping silently");
          return { success: true, message: "Consultation request submitted successfully", emailSent: true };
        }
        try {
          await createConsultation({
            name: input.name,
            email: input.email,
            company: input.company,
            revenue: input.revenue,
            industry: input.industry,
            focus: input.focus,
            message: input.message,
          });

          const notificationTemplate = generateConsultationNotificationTemplate(input);
          const emailSent = await sendEmail({
            to: "rajesh@wellbeeng.com",
            subject: `New Consultation Request: ${input.name}${input.company ? ` from ${input.company}` : ""}`,
            html: notificationTemplate,
          });

          if (!emailSent) {
            console.warn("[API] Consultation notification email failed to send");
            // Don't throw - the consultation was still saved successfully
          }

          return {
            success: true,
            message: "Consultation request submitted successfully",
            emailSent,
          };
        } catch (error) {
          console.error("[API] Failed to submit consultation:", error);
          throw new Error("Failed to submit consultation request. Please try again.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
