"use client";
import HeaderPages from "../components/headerPages";
import ListContacts from "../components/listContacts";
import { useEffect, useState } from "react";
import { useContact } from "../contexts/contactContext";

export default function Home() {
  const { getAllContacts, contacts } = useContact();

  const [contactsLoaded, setContactsLoaded] = useState(false);

  useEffect(() => {
    if (contacts && contacts.length > 0) {
      setContactsLoaded(true);
    }
    getAllContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts]);
  return (
    <>
      <HeaderPages />
      <main>
        <section className="body min-h-screen p-4">
          {contactsLoaded ? (
            <ListContacts />
          ) : (
            <span>Aguarde, carregando contatos...</span>
          )}
        </section>
      </main>
    </>
  );
}
