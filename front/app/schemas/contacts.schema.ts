import { z } from "zod";

export const ContactSchema = z.object({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    created_at: z.date()
})

export type ContactData = z.infer<typeof ContactSchema>