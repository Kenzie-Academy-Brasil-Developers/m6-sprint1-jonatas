"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";

interface LayoutProps {
  children?: ReactNode;
}
const HeaderPages = ({ children }: LayoutProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined); // Inicializado com undefined

  useEffect(() => {
    const cookieLogged = getCookie("contatos.token");

    if (cookieLogged !== undefined) {
      setLoggedIn(true); 
    } else {
      setLoggedIn(false); 
    }
  }, []);

  const handleLogout = () => {
    deleteCookie("contatos.token");
    window.location.href = "/login";
  };

  if (loggedIn === undefined) {
    return null;
  }

  if (!loggedIn) {
    return null;
  }

  return (
    <>
      <header className="flex justify-start mr-2 bg-gray-200 w-full p-3.5">
        <nav>
          <ul>
            <li>
              <Link
                className="w-5 mr-2 cursor-pointer hover:bg-gray-600/30"
                href="/principal"
              >
                Início
              </Link>
              <a
                className="mr-2 cursor-pointer hover:bg-gray-600/30"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default HeaderPages;
