import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
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
  userName: string;
  setIsAuth: (data: boolean) => void;
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

  const [userName, setUsername] = useState<string>(
    localStorage.getItem("@userName") || ""
  );

  const history = useHistory();

  const login = (data: dataSchema) => {
    const wait = new Promise((response) => {
      api.post("/users/signin/", data).then((res) => {
        console.log(res);
        const responseToken = res.data.accessToken;
        const responseUser = res.data.user;
        const responseUserName = res.data.user.name;
        localStorage.setItem("@token", responseToken);
        localStorage.setItem("@user", JSON.stringify(responseUser));
        localStorage.setItem("@userName", responseUserName);
        setToken(responseToken);
        setUsername(responseUserName);
        setIsAuth(true);
        history.push("/");
        response(res);
      });
    });
    toast.promise(
      wait,
      {
        pending: "Efetuando login",
        success: `Login efetuado com sucesso`,
        error: "Falha ao efetuar login",
      },
      { autoClose: 2000 }
    );
  };

  const logout = () => {
    localStorage.clear();
    console.log("Logout");
    setIsAuth(false);
    toast.success("Logout efetuado com sucesso");
  };

  return (
    <AuthContext.Provider
      value={{ login, isAuth, logout, token, setIsAuth, userName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
