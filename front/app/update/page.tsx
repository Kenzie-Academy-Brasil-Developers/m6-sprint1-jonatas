import { NextPage } from "next";
import HeaderPages from "../components/headerPages";
import UpdateContactForm from "../components/updateContactForm";


const UpdateContact: NextPage = () => {
  return (
    <>
      <HeaderPages />
      <UpdateContactForm />
    </>
  );
};

export default UpdateContact;
