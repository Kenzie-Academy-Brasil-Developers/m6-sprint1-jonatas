"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../contexts/authContext";
import {
  ContactData,
  RegisterContact,
} from "../schemas/contacts.schema";

const CreateContactForm = () => {
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(RegisterContact),
  });

  const { contact: registerContact } = useAuth();

  const onFormSubmit = (formData: ContactData) => {
    console.log(formData);
    registerContact(formData);
  };
  return (
    <div className="client-form-container">
      <p className="text-4xl mt-6 font-serif">Cadastre um contato</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="grid gap-2">
          <label htmlFor="contact-name" className="client-form-label">
            Nome
          </label>
          <div className="mt-2">
            <input
              autoComplete="on"
              id="contact-name"
              type="text"
              placeholder="Seu Nome"
              className="client-form-input"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="client-form-label">
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="contact-email"
                type="email"
                placeholder="example@.com"
                className="client-form-input"
                {...register("email")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-phone" className="client-form-label">
              Numero de telefone
            </label>
            <div className="mt-2">
              <input
                autoComplete="on"
                id="contact-phone"
                type="text"
                placeholder="example@.com"
                className="client-form-input"
                {...register("phone")}
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
        </div>
      </form>
    </div>
  );
};

export default CreateContactForm;
