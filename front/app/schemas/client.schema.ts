import { z } from "zod";

export const ClientSchema = z.object({
    name: z.string().min(1,"Nome obrigatorio"),
    email: z.string().email("Necessita de um email válido"),
    password: z.string().min(1,"Senha obrigatoria"),
    phone:  z.string().min(1,"Telefone obrigatorio"),
    created_at: z.date().default(() => new Date())
});

export const LoginSchema = ClientSchema.omit({
    name: true,
    phone: true,
    created_at: true
});

export type ClientData = z.infer<typeof ClientSchema>;
export  type LoginData = z.infer<typeof LoginSchema>;