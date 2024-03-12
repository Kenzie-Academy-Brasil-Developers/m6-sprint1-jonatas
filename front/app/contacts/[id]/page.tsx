import Link from "next/link";
import { ContactFullData } from "../../schemas/contacts.schema";
import api from "../../services/api";
import ContactContainer from "../../components/contactContainer";
import HeaderPages from "../../components/headerPages";


interface PageProps {
  params: {
    id: string;
  };
}

export const revalidate = 90;

export async function generateStaticParams() {
  const response = await api.get<ContactFullData[]>("/contacts");

  return response.data.map((contact) => ({ id: contact.id }));
}

const Contact = async ({ params }: PageProps) => {
  const response = await api.get(`/contacts/${params.id}`);
  const contact: ContactFullData = response.data;
  return (
    <>
      <HeaderPages />

      <main className="body min-h-screen">
        <div className="flex justify-end p-6">
          <Link
            href={"/"}
            className="btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Voltar
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <ContactContainer contact={contact} />
        </div>
      </main>
    </>
  );
};

export default Contact;
