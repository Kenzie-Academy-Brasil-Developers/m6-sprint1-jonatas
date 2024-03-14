"use client";
import HeaderPages from "../components/headerPages";
import ListContacts from "../components/listContacts";
import { useEffect, useState } from "react";
import { useContact } from "../contexts/contactContext";
export default function Home() {
  const { contacts } = useContact();
  const [contactsLoaded, setContactsLoaded] = useState(false);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const fetchedContacts = await contacts;
        if (fetchedContacts && fetchedContacts.length > 0) {
          setContactsLoaded(true);
        }
      } catch (error) {
        console.error("Erro ao carregar os contatos:", error);
      }
    };
    fetchContacts();
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
