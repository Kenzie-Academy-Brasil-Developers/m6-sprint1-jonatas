import { getCookie } from "cookies-next";
import HeaderPages from "./components/headerPages";
import ListContacts from "./components/listContacts";
import { ContactData } from "./schemas/contacts.schema";
import api from "./services/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const verifyToken = () => {
  const token = getCookie("contatos.token", { cookies });
  if (!token) {
    redirect("/login");
  }
  return token;
};

export default async function Home() {
  const response = await api.get("/contacts");
  const contacts: ContactData[] = response.data;
  verifyToken();
  return (
    <>
      <HeaderPages />
      <main>
        <section className="body min-h-screen p-4">
          <ListContacts contacts={contacts} />
        </section>
      </main>
    </>
  );
}
