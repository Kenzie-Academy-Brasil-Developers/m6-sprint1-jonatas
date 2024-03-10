import { NextPage } from "next";
import PrincipalItens from "../components/principalItens";
import HeaderPages from "../components/headerPages";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const verifyToken = () => {
  const token = getCookie("contatos.token", { cookies });
  if (!token) {
    redirect("/login");
  }
  return token;
};

const PrincipalOptions: NextPage = () => {
  verifyToken();
  return (
    <>
      <HeaderPages />
      <main className="body min-h-screen flex items-center justify-center">
        <PrincipalItens />
      </main>
    </>
  );
};

export default PrincipalOptions;
