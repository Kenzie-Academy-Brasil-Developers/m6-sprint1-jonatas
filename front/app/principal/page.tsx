import { NextPage } from "next";
import PrincipalItens from "../components/principalItens";
import HeaderPages from "../components/headerPages";


const PrincipalOptions: NextPage = () => {
  return (
    <>
      <HeaderPages />
      <main className="body min-h-screen flex items-center justify-center">
        <PrincipalItens />
      </main>
    </>
  );
};

export default PrincipalOptions;
