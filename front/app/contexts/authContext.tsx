import { ReactNode, createContext, useContext } from "react";
import { ClientData, LoginData } from "../schemas/client.schema";
import { useRouter } from "next/navigation";
import api from "../services/api";
import { setCookie } from "cookies-next";
import Toast from "../components/toast";
import { ContactData } from "../schemas/contacts.schema";

interface Props {
  children: ReactNode;
}

interface AuthProviderData {
  register: (clientData: ClientData) => void;
  login: (loginData: LoginData) => void;
  contact: (contactData: ContactData) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const register = (clientData: ClientData) => {
    api
      .post("/clients", clientData)
      .then(() => {
        Toast({ message: "Cadastro realizado!", isSuccess: true });
        router.push("/login");
      })
      .catch((error) => {
        Toast({ message: "Erro no cadastro!" });
      });
  };

  const login = (loginData: LoginData) => {
    api
      .post("/login", loginData)
      .then((response) => {
        setCookie("contatos.token", response.data.token, { maxAge: 60 * 30 });
      })
      .then(() => {
        Toast({ message: "Login realizado!", isSuccess: true });
        router.push("/principal");
        // Toast
      })
      .catch((error) => {
        Toast({ message: "Erro no login! Verifique seu email/senha" });
      });
  };

  const contact = (contactData: ContactData) => {
    api
      .post("/contacts", contactData)
      .then(() => {
        Toast({ message: "Contato cadastrado com sucesso!", isSuccess: true });
        router.push("/");
      })
      .catch((error) => {
        Toast({ message: "Erro ao cadastrar contato!" });
      });
  };

  return (
    <AuthContext.Provider value={{ register, login, contact }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
