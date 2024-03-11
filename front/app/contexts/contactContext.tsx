import { createContext, ReactNode, useContext, useState } from "react";

interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
}

interface ContactContextType {
    contacts: Contact[];
    setContacts: (contacts: Contact[]) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};

interface ContactProviderProps {
    children: ReactNode;
}

export const ContactProvider = (props: ContactProviderProps) => {
    const { children } = props;
    const [contacts, setContacts] = useState<Contact[]>([]);

    return (
        <ContactContext.Provider value={{ contacts, setContacts }}>
            {children}
        </ContactContext.Provider>
    );
};
