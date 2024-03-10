import { NextPage } from "next";
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

const Contact: NextPage = () => {
  verifyToken();
  return (
    <>
      <HeaderPages />
      <p>contact page</p>
    </>
  );
};

export default Contact;
