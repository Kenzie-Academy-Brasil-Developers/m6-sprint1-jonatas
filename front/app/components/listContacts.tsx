"use client";
import { useContact } from "../contexts/contactContext";
import Card from "./card";

const ListContacts = () => {
  const { contacts } = useContact();
  
  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center">
        {contacts.map((contact) => {
          return <Card key={contact.id} contact={contact} />;
        })}
      </div>
    </>
  );
};

export default ListContacts;
