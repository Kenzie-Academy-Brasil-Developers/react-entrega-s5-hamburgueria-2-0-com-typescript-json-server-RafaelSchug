import { createContext, useContext, ReactNode } from "react";
import api from "../../services/api";

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
  const registerNewUser = (data: RegisterData) => {
    console.log("Receiving this data:", data);
    const { name, email, password } = data;
    api
      .post("/users/register/", { name, email, password })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <RegisterContext.Provider value={{ registerNewUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);

export default RegisterProvider;
