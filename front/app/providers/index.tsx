"use client"

import { ReactNode } from "react";
import { ContactProvider } from "../contexts/contactContext";

export const Providers = ({children}: {children: ReactNode}) =>{
    return(
        <>
        <ContactProvider>
            {children}
        </ContactProvider>
        </>
    )
}