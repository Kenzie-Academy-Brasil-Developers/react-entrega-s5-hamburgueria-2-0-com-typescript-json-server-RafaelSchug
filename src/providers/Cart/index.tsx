import { promises } from "fs";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
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
  quantity: number;
}

interface CartContextTypes {
  cart: CartSchema[];

  addProductToCart: (productId: number) => void;
  removeProductFromCart: (id: number) => void;
  increaseProductQuantity: (id: number) => void;
  decreaseProductQuantity: (id: number) => void;
  removeAllProductsFromCart: () => void;
}

const CartProvider = ({ children }: Types) => {
  const { token, setIsAuth } = useAuth();
  const { products } = useProducts();
  const [cart, setCart] = useState<CartSchema[]>([] as CartSchema[]);
  const localStorageData: string = localStorage.getItem("@user") || "";
  const [userId, setUserId] = useState<number>();

  // state para impedir de clicar em adicionar itens enquanto uma requisição estiver pendente
  const [awaitingRequest, setAwaitingRequest] = useState<boolean>(false);

  const getCartList = () => {
    api
      .get(`/cart/?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const responseProducts = response.data;
        setCart(responseProducts);
        setAwaitingRequest(false);
      })
      .catch(() => {
        localStorage.clear();
        setAwaitingRequest(false);
        setIsAuth(false);
      });
  };

  const addProductToCart = (productId: number) => {
    const product = products.find((item) => item.id === productId);
    const isProductInCart = cart.some((item) => item.title === product?.title);

    if (!isProductInCart && !awaitingRequest) {
      setAwaitingRequest(true);
      const wait = new Promise((response, fail) => {
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
          .then(() => {
            response(true);
            getCartList();
          })
          .catch(fail);
      });

      toast.promise(
        wait,
        {
          success: "Produto adicionado ao carrinho",
          pending: "Adicionando ao carrinho...",
          error: "Erro ao adicionar produto",
        },
        { autoClose: 500 }
      );
    } else {
      toast.info("Produto já incluso - Altere a quantidade em seu carrinho", {
        autoClose: 2000,
        toastId: `${productId}`,
      });
    }
  };

  const removeProductFromCart = (id: number) => {
    const wait = new Promise((response, fail) => {
      api
        .delete(`/cart/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          response(true);
          getCartList();
        })
        .catch(fail);
    });

    toast.promise(
      wait,
      {
        success: "Produto removido",
        pending: "Removendo produto",
        error: "Falha ao remover produto",
      },
      { autoClose: 300 }
    );
  };

  const increaseProductQuantity = (id: number) => {
    const newQuantity: number =
      Number(cart.find((item) => item.id === id)?.quantity) + 1;

    const wait = new Promise((response, fail) => {
      api
        .patch(
          `/cart/${id}`,
          { quantity: newQuantity },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          getCartList();
          response(true);
        })
        .catch(fail);
    });

    toast.promise(
      wait,
      {
        success: "Produto adicionado",
        pending: "Adicionando produto",
        error: "Falha ao adicionar produto",
      },
      { autoClose: 300 }
    );
  };

  const decreaseProductQuantity = (id: number) => {
    const newQuantity: number =
      Number(cart.find((item) => item.id === id)?.quantity) - 1;

    if (newQuantity) {
      const wait = new Promise((response, fail) => {
        api
          .patch(
            `/cart/${id}`,
            { quantity: newQuantity },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then(() => {
            getCartList();
            response(true);
          })
          .catch(fail);
      });

      toast.promise(
        wait,
        {
          success: "Produto removido",
          pending: "Removendo produto",
          error: "Falha ao remover produto",
        },
        { autoClose: 300 }
      );
    }
  };

  const removeAllProductsFromCart = () => {
    const wait = Promise.all(
      cart.map(async (item) => {
        await api
          .delete(`cart/${item.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => {
            getCartList();
          });
      })
    );

    toast.promise(
      wait,
      {
        success: "Produtos removidos",
        pending: "Removendo produtos",
        error: "Falha ao remover produtos",
      },
      { autoClose: 300 }
    );
  };

  useEffect(() => {
    if (token) {
      setUserId(JSON.parse(localStorageData).id);
      getCartList();
    }
  }, [token, userId]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeAllProductsFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
