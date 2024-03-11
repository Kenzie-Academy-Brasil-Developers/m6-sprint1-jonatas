import { NextPage } from "next";
import HeaderPages from "../components/headerPages";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CreateContactForm from "../components/registerContactForm";

const verifyToken = () => {
  const token = getCookie("contatos.token", { cookies });
  if (!token) {
    redirect("/login");
  }
  return token;
};

const Contacts: NextPage = () => {
  verifyToken();
  return (
    <>
      <HeaderPages />
      <CreateContactForm />
    </>
  );
};

export default Contacts;
