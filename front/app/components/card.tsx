"use client";
import Link from "next/link";
import { ContactData } from "../schemas/contacts.schema";
import { FaPhone } from "react-icons/fa";

interface CardProps {
  contact: ContactData;
}

const Card = ({ contact }: CardProps) => {
  return (
    <div className="flex flex-col justify-items-end bg-gray-400 w-50 h-35 rounded-lg">
      <Link
        href={`/${contact.id}`}
        className="flex flex-col items-center min-w-56"
      >
        <p className="m-3 text-lg">{contact.name}</p>
        <p className="m-3 text-xl">{contact.phone}</p>
        <p className="m-3 text-xl">{contact.email}</p>
      </Link>
      <div className="min-h-15 bg-gray-400 flex justify-center rounded-e-sm">
        <button>
          <FaPhone className="fill-blue-400 w-10 h-10 m-1" />
        </button>
      </div>
    </div>
  );
};

export default Card;
