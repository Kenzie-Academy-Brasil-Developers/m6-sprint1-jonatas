"use client"

import { useEffect } from "react";
import { useContact } from "../contexts/contactContext";
import { ContactData } from "../schemas/contacts.schema";
import Card from "./card";

interface ListContactProps{
    contacts: ContactData[]
}

const ListContacts = ({contacts}: ListContactProps)=>{
    const {setContacts} = useContact()
    useEffect(() => {
        setContacts(contacts)
    }, [contacts, setContacts])
    return(
        <>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center">
            {
                contacts.map((contact) =>{
                    return <Card key={contact.id} contact={contact}/>
                })
            }
        </div>
        </>
    )
}

export default ListContacts