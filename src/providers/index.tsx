import { ReactNode } from "react";
import AuthProvider from "./Auth";
import ProductsProvider from "./Products";

interface Types {
  children: ReactNode;
}

const Providers = ({ children }: Types) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
