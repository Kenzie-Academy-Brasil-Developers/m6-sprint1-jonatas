"use client";
import Link from "next/link";
import { ContactFullData } from "../schemas/contacts.schema";
import { FaPhone, FaTrash } from "react-icons/fa";
import { useContact } from "../contexts/contactContext";

interface CardProps {
  contact: ContactFullData;
}

const Card = ({ contact }: CardProps) => {
  const { deleteContact } = useContact();

  const handleDelete = () => {
    deleteContact(contact.id);
  };

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
      <div className="min-h-15 bg-gray-400 flex justify-center gap-2 rounded-e-sm ">
        <button>
          <a href={`tel:${contact.phone}`}>
            <FaPhone className="fill-blue-400 w-10 h-10 m-1" />
          </a>
        </button>
        <button onClick={handleDelete}>
          <FaTrash className="fill-red-400 w-10 h-10 m-1" />
        </button>
      </div>
    </div>
  );
};

export default Card;