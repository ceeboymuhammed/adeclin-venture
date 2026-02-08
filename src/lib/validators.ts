import { z } from "zod";

export const LeadSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone/WhatsApp number."),
  company: z.string().optional().or(z.literal("")),
  inquiryType: z.enum([
    "Livestock Import & Export",
    "Farming & Farm Management",
    "Agricultural Consulting & Training",
    "PURE IRON BEANS (Wholesale)",
    "Other",
  ]),
  message: z.string().min(10, "Please add a short message (at least 10 characters)."),
  sourcePage: z.string().optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof LeadSchema>;
