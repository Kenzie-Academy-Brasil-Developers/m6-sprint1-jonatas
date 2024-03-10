import { NextPage } from "next";
import LoginForm from "../components/loginForm";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const verifyToken = () => {
  const token = getCookie("contatos.token", { cookies });
  if (token) {
    redirect("/principal");
  }
  return token;
};

const Login: NextPage = () => {
  verifyToken();
  return (
    <>
      <main className="body min-h-screen flex items-center justify-center">
        <LoginForm />
      </main>
    </>
  );
};

export default Login;
