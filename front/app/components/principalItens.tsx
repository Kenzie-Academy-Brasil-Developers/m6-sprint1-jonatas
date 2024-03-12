"use client";

import Link from "next/link";

const PrincipalItens = () => {
  return (
    <>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        href={"/dashboard"}
      >
        Veja seus contatos
      </Link>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        href={"/contacts"}
      >
        Adicionar Contato
      </Link>
    </>
  );
};

export default PrincipalItens;
