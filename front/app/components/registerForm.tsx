"use client";
import { useForm } from "react-hook-form";
import { ClientData, ClientSchema } from "../schemas/client.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useAuth } from "../contexts/authContext";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<ClientData>({
    resolver: zodResolver(ClientSchema),
  });

  const { register: registerClient } = useAuth();

  const onFormSubmit = (formData: ClientData) => {
    registerClient(formData);
  };
  return (
    <div className="client-form-container">
      <p className="text-4xl mt-6 font-serif">Cadastre-se</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="grid gap-2">
          <label htmlFor="register-name" className="client-form-label">
            Nome
          </label>
          <div className="mt-2">
            <input
            autoComplete="on"
              id="register-name"
              type="text"
              placeholder="Seu Nome"
              className="client-form-input"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="register-email" className="client-form-label">
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="register-email"
                type="email"
                placeholder="example@.com"
                className="client-form-input"
                {...register("email")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="register-phone" className="client-form-label">
              Numero de telefone
            </label>
            <div className="mt-2">
              <input
              autoComplete="on"
                id="register-phone"
                type="text"
                placeholder="example@.com"
                className="client-form-input"
                {...register("phone")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="register-password" className="client-form-label">
              Senha
            </label>
            <div className="mt-2">
              <input
              autoComplete="on"
                id="register-password"
                type="password"
                placeholder="Sua senha"
                className="client-form-input"
                {...register("password")}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="min-w-full client-form-button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Cadastrar
            </button>
          </div>

          <Link
            href={"/"}
            className="client-form-link bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
          >
            Ir para o login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
