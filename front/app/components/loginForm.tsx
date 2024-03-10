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
      <p className="text-4xl mt-4 font-serif">Login</p>
      <form className="space-y-4 w-5/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="flex flex-col items-center gap-3">
          <div>
            <label htmlFor="login-email" className="client-form-label">
              E-mail
            </label>
            <div className="mt-2">
              <input
                autoComplete="on"
                id="login-email"
                type="email"
                placeholder="example@.com"
                className="client-form-input"
                {...register("email")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="login-password" className="client-form-label">
              Senha
            </label>
            <div className="mt-2">
              <input
                autoComplete="on"
                id="login-password"
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
            <button
              type="submit"
              className="min-w-full client-form-button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Entrar
            </button>
          </div>
          <Link
            href={"/register"}
            className="client-form-button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded "
          >
            Não cadastrado? Clique aqui!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
