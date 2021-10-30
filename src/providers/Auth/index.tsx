import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

interface dataSchema {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextData {
  login: (data: dataSchema) => void;
  logout: () => void;
  isAuth: boolean;
  token: string;
}

interface Types {
  children: ReactNode;
}

const AuthProvider = ({ children }: Types) => {
  const [isAuth, setIsAuth] = useState<boolean>(
    !!localStorage.getItem("@token") || false
  );
  const [token, setToken] = useState<string>(
    localStorage.getItem("@token") || ""
  );

  const history = useHistory();
  const login = (data: dataSchema) => {
    api
      .post("/users/signin/", data)
      .then((response) => {
        console.log(response);
        const responseToken = response.data.accessToken;
        localStorage.setItem("@token", responseToken);
        localStorage.setItem("@user", JSON.stringify(response.data.user));
        setToken(responseToken);
        setIsAuth(true);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    localStorage.clear();
    console.log("Logout");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ login, isAuth, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
