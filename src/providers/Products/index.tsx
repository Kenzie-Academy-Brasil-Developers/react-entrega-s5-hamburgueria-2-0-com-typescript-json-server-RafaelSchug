import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
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
  filteredProducts: productsSchema[];
  filterProductsByName: (str: string) => void;
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
  const [filteredProducts, setFilteredProducts] = useState<productsSchema[]>(
    [] as productsSchema[]
  );

  useEffect(() => {
    api
      .get("/products/")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(() => {
        toast.error("Erro ao carregar produtos");
      });
  }, []);

  const filterProductsByName = (str: string) => {
    const filteredProducts = products.filter((item) =>
      item.title.toLowerCase().includes(str.toLowerCase())
    );
    if (filteredProducts.length) {
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, filteredProducts, filterProductsByName }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider;
