import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import api from "../../services/api";

interface productsSchema {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

interface ProductsContextData {
  products: productsSchema[];
}
const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

interface Types {
  children: ReactNode;
}

const ProductsProvider = ({ children }: Types) => {
  const [products, setProducts] = useState<productsSchema[]>(
    [] as productsSchema[]
  );

  useEffect(() => {
    api
      .get("/products/")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider;
