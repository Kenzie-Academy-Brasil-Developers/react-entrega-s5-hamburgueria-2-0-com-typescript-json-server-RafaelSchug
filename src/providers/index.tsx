import { ReactNode } from "react";
import AuthProvider from "./Auth";

interface Types {
  children: ReactNode;
}

const Providers = ({ children }: Types) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
