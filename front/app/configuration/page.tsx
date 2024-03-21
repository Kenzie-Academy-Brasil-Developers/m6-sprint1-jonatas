import { NextPage } from "next";
import HeaderPages from "../components/headerPages";
import ConfigItens from "../components/configItens";


const PrincipalOptions: NextPage = () => {
  return (
    <>
      <HeaderPages />
      <main className="body min-h-screen flex items-center justify-center">
        <ConfigItens />
      </main>
    </>
  );
};

export default PrincipalOptions;
