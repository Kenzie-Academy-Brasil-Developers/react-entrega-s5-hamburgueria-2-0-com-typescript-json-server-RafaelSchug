import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import api from "../../services/api";
import { useAuth } from "../Auth";

const CartContext = createContext<CartContextTypes>({} as CartContextTypes);

interface Types {
  children: ReactNode;
}

interface CartSchema {
  image: string;
  title: string;
  category: string;
  price: number;
  userId: number;
  id: number;
}

interface CartContextTypes {
  cart: CartSchema[];
}

const CartProvider = ({ children }: Types) => {
  const { token } = useAuth();
  const [cart, setCart] = useState<CartSchema[]>([] as CartSchema[]);
  const localStorageData: string = localStorage.getItem("@user") || "";

  useEffect(() => {
    if (token) {
      const userId = JSON.parse(localStorageData).id;
      api
        .get(`/cart/?userId=${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const responseProducts = response.data;
          console.log(response);
          setCart(responseProducts);
        });
    }
  }, [token]);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
