import { createContext, useContext, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useAuth } from "../Auth";

interface Types {
  children: ReactNode;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

interface RegisterContextData {
  registerNewUser: (data: RegisterData) => void;
}

const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);

const RegisterProvider = ({ children }: Types) => {
  const { login } = useAuth();

  const registerNewUser = (data: RegisterData) => {
    console.log("Receiving this data:", data);
    const { name, email, password } = data;
    const wait = new Promise((response) => {
      api.post("/users/register/", { name, email, password }).then(() => {
        setTimeout(() => {
          login({ email, password });
        }, 3000);
        response(true);
      });
    });
    toast.promise(
      wait,
      {
        pending: "Registrando novo usuário...",
        success: "Registro efetuado com sucesso! Efetuando login automático...",
        error: "Email já utilizado",
      },
      { autoClose: 3000, hideProgressBar: false }
    );
  };

  return (
    <RegisterContext.Provider value={{ registerNewUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);

export default RegisterProvider;
