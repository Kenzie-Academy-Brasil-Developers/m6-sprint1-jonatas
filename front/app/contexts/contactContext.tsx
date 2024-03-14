import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import api from "../services/api";
import { getCookie } from "cookies-next";
import Toast from "../components/toast";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: Date;
}

interface ContactContextType {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
  deleteContact: (id: string) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact deve ser usado dentro de um ContactProvider.");
  }
  return context;
};

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactProvider = (props: ContactProviderProps) => {
  const { children } = props;
  const [contacts, setContacts] = useState<Contact[]>([]);
  const router = useRouter();

  const deleteContact = (id: string) => {
    const token = getCookie("contatos.token");
    api
      .delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== id)
        );
        Toast({ message: "Contato excluído com sucesso!", isSuccess: true });
        router.push("/dashboard");
      })
      .catch((error) => {
        Toast({ message: "Erro ao excluir contato!" });
      });
  };

  useEffect(() => {
    const token = getCookie("contatos.token");
    (async () => {
      if (token) {
        const response = await api.get("/contacts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data)
        setContacts(response.data);
      }
    })();
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, setContacts, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
