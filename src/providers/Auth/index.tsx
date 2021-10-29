import { createContext, useContext, useState, ReactNode } from "react";

interface dataSchema {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

interface AuthContextData {
  login: (data: dataSchema) => void;
  isAuth: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const [isAuth, setIsAuth] = useState<boolean>(
  !!localStorage.getItem("@token") || false
);

interface Types {
  children: ReactNode;
}

const login = (data: dataSchema) => {};

const AuthProvider = ({ children }: Types) => {
  return (
    <AuthContext.Provider value={{ login, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
