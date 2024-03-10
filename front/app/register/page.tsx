import { getCookie } from "cookies-next";
import RegisterForm from "../components/registerForm";
import { NextPage } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const verifyToken = () => {
  const token = getCookie("contatos.token", { cookies });
  if (token) {
    redirect("/principal");
  }
  return token;
};

const Register: NextPage = () => {
  verifyToken();
  return (
    <main className="body min-h-screen flex items-center justify-center">
      <RegisterForm />
    </main>
  );
};

export default Register;
