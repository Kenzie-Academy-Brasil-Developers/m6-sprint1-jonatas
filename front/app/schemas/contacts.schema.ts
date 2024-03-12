import { z } from "zod";

export const ContactSchema = z.object({
    id: z.string(),
    name: z.string().min(1, "Nome obrigatorio"),
    phone: z.string().min(1, "Telefone obrigatorio"),
    email: z.string().email("Necessita de um email válido"),
    created_at: z.date().default(() => new Date())

})

export const RegisterContact = ContactSchema.omit({
    id: true,
    created_at: true
});

export type ContactData = z.infer<typeof RegisterContact>;