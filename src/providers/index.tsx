import { ReactNode } from "react";
import AuthProvider from "./Auth";
import ProductsProvider from "./Products";
import CartProvider from "./Cart";
import RegisterProvider from "./Register";

interface Types {
  children: ReactNode;
}

const Providers = ({ children }: Types) => {
  return (
    <AuthProvider>
      <RegisterProvider>
        <ProductsProvider>
          <CartProvider>{children}</CartProvider>
        </ProductsProvider>
      </RegisterProvider>
    </AuthProvider>
  );
};

export default Providers;
