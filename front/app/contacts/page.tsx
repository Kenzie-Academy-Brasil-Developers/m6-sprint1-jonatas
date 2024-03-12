import { NextPage } from "next";
import HeaderPages from "../components/headerPages";
import CreateContactForm from "../components/registerContactForm";


const Contacts: NextPage = () => {
  return (
    <>
      <HeaderPages />
      <CreateContactForm />
    </>
  );
};

export default Contacts;
