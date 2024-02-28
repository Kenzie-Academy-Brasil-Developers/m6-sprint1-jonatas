// import LoginForm from "@/components/loginForm";
import { NextPage } from "next";
import LoginForm from "../components/loginForm";

const Login: NextPage = () => {
  return (
    <>
      <main className="body min-h-screen flex items-center justify-center">
        <LoginForm />
      </main>
    </>
  );
};

export default Login;
