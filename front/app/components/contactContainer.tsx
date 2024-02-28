"use client";

import { ContactData } from "../schemas/contacts.schema";

interface IContactContainerProps {
  contact: ContactData;
}

const ContactContainer = ({ contact }: IContactContainerProps) => {
  return (
    <div className="w-4/5 h-3/4 min-w-[auto] min-h-[550] bg-pink-800 rounded-lg flex flex-row pb-8 pt-20">
      <div className="flex flex-col justify-center w-2/4 pl-32">
        <p className="text-5xl text-gray-100 pb-6 ml-12">{contact.name}</p>
      </div>
      <div className="flex flex-col gap-12 w-2/4 justify-center ">
        <p className="text-5xl my-2 text-gray-100">
          <strong>Nome:</strong> {contact.name}
        </p>
        <p className="text-5xl my-2 text-gray-100">
          <strong>Email:</strong> {contact.email}
        </p>
        <p className="text-5xl my-2 text-gray-100">
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p className="text-5xl my-2 text-gray-100">
          <strong>Created at: </strong> {contact.created_at.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ContactContainer;
