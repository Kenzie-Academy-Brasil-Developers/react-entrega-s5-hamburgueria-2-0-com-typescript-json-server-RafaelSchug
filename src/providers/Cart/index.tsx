import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { useProducts } from "../Products";

const CartContext = createContext<CartContextTypes>({} as CartContextTypes);

interface Types {
  children: ReactNode;
}

interface CartSchema {
  title: string;
  image: string;
  category?: string;
  price: number;
  userId?: number;
  id: number;
  quantity?: number;
}

interface CartContextTypes {
  cart: CartSchema[];
  addProductToCart: (productId: number) => void;
  removeProductFromCart: (id: number) => void;
  increaseProductQuantity: (id: number) => void;
  decreaseProductQuantity: (id: number) => void;
}

const CartProvider = ({ children }: Types) => {
  const { token, setIsAuth } = useAuth();
  const { products } = useProducts();
  const [cart, setCart] = useState<CartSchema[]>([] as CartSchema[]);
  const localStorageData: string = localStorage.getItem("@user") || "";
  const [userId, setUserId] = useState<number>();

  const addProductToCart = (productId: number) => {
    const product = products.find((item) => item.id === productId);
    const isProductInCart = cart.some((item) => item.title === product?.title);
    if (!isProductInCart) {
      api
        .post(
          `/cart/`,
          {
            ...product,
            quantity: 1,
            userId: userId,
            id: null,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => getCartList())
        .catch((error) => console.log(error));
    }
  };

  const getCartList = () => {
    api
      .get(`/cart/?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const responseProducts = response.data;
        console.log(response);
        setCart(responseProducts);
      })
      .catch(() => {
        localStorage.clear();
        setIsAuth(false);
      });
    console.log("%c CARREGOU", "font-size: 20px; color: blue;");
  };

  const removeProductFromCart = (id: number) => {
    api
      .delete(`/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => getCartList())
      .catch((error) => console.log(error));
  };

  const increaseProductQuantity = (id: number) => {
    const newQuantity: number =
      Number(cart.find((item) => item.id === id)?.quantity) + 1;

    api
      .patch(
        `/cart/${id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => getCartList())
      .catch((error) => console.log(error));
  };

  const decreaseProductQuantity = (id: number) => {
    const newQuantity: number =
      Number(cart.find((item) => item.id === id)?.quantity) - 1;

    if (newQuantity) {
      api
        .patch(
          `/cart/${id}`,
          { quantity: newQuantity },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => getCartList())
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    if (token) {
      setUserId(JSON.parse(localStorageData).id);
      getCartList();
    }
  }, [token, userId]);

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
