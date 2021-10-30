import { ReactNode } from "react";
import AuthProvider from "./Auth";
import ProductsProvider from "./Products";
import CartProvider from "./Cart";

interface Types {
  children: ReactNode;
}

const Providers = ({ children }: Types) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
