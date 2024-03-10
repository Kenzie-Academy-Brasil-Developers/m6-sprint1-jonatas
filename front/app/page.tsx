import HeaderPages from "./components/headerPages";
import ListContacts from "./components/listContacts";
import { ContactData } from "./schemas/contacts.schema";
import api from "./services/api";

export default async function Home() {
  const response = await api.get("/contacts");
  const contacts: ContactData[] = response.data;
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
