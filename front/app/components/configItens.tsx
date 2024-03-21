"use client";

import Link from "next/link";


const ConfigItens = () => {
  
  return (
    <>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        href={"/personal"}
      >
        Atualizar dados pessoais
      </Link>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        href={"/password"}
      >
        Atualizar senha
      </Link>
    </>
  );
};

export default ConfigItens;
