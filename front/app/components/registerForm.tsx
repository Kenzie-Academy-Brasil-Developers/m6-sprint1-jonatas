import { useForm } from "react-hook-form";
import { ClientData, ClientSchema } from "../schemas/client.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<ClientData>({
    resolver: zodResolver(ClientSchema),
  });

  const onFormSubmit = (formData: ClientData) => {
    console.log(formData);
  };
  return (
    <div className="user-form-container">
      <p className="text-4xl mt-6 font-serif">Cadastre-se</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="name" className="client-form-label">
            Nome
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Seu Nome"
              className="client-form-input"
              {...register("name")}
            />
          </div>
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
            <label htmlFor="phone" className="client-form-label">
              Numero de telefone
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="example@.com"
                className="client-form-input"
                {...register("phone")}
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
          </div>
          <div>
            <button type="submit" className="client-form-button">
              Cadastrar
            </button>
          </div>

          <Link href={"/login"} className="client-form-link">
            Ir para o login
          </Link>
        </div>
      </form>
    </div>
  );
};
