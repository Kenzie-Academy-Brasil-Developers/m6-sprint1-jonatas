"use client";

import { ReactNode } from "react";
import { ContactProvider } from "../contexts/contactContext";
import { AuthProvider } from "../contexts/authContext";
import { ToastContainer } from "react-toastify";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthProvider>
        <ContactProvider>{children}</ContactProvider>
      </AuthProvider>
    </>
  );
};
