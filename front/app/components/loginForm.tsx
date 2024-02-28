"use client";
import { useForm } from "react-hook-form";
import { LoginData, LoginSchema } from "../schemas/client.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useAuth } from "../contexts/authContext";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const { login } = useAuth();

  const onFormSubmit = (formData: LoginData) => {
    login(formData);
  };
  return (
    <div className="client-form-container">
      <p className="text-4xl mt-6 font-serif">Login</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <div>
            <label htmlFor="email" className="client-form-label">
              E-mail
            </label>
            <div className="mt-2">
              <input
                type="email"
                placeholder="example@.com"
                className="client-form-input"
                {...register("email")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="client-form-label">
              Senha
            </label>
            <div className="mt-2">
              <input
                type="password"
                placeholder="Sua senha"
                className="client-form-input"
                {...register("password")}
              />
            </div>
            <Link href={"/resetPass"} className="client-form-label">
              Esqueceu sua senha?
            </Link>
          </div>
          <div>
            <button type="submit" className="client-form-button">
              Entrar
            </button>
          </div>
          <Link href={"/register"} className="client-form-button">
            Não cadastrado? Clique aqui!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
