import Link from "next/link";
import { ContactData } from "../schemas/contacts.schema";
import api from "../services/api";
import ContactContainer from "../components/contactContainer";

interface PageProps {
  params: {
    id: string;
  };
}

export const revalidate = 90

export async function generateStaticParams(){
    const response = await api.get<ContactData[]>('/contacts')

    return response.data.map((contact) => ({id: contact.id}))
}

const Contact = async ({ params }: PageProps) => {
  const response = await api.get(`/contacts/${params.id}`);
  const contact: ContactData = response.data;

  return (
    <main className="body min-h-screen">
      <div className="flex justify-end p-6">
        <Link href={"/"} className="btn-primary">Voltar</Link>
      </div>
      <div className="flex items-center justify-center">
        <ContactContainer contact={contact} />
      </div>
    </main>
  );
};

export default Contact;
