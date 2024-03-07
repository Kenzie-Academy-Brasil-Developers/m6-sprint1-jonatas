// import LoginForm from "@/components/loginForm";
import { NextPage } from "next";
import PrincipalItens from "../components/principalItens";

const PrincipalOptions: NextPage = () => {
  return (
    <>
      <main className="body min-h-screen flex items-center justify-center">
        <PrincipalItens />
      </main>
    </>
  );
};

export default PrincipalOptions;
