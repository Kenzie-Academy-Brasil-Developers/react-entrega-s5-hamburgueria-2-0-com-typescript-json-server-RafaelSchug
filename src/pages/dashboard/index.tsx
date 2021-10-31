import Header from "../../components/Header";
import Card from "../../components/Card";
import { useAuth } from "../../providers/Auth";
import { useEffect } from "react";
import { useProducts } from "../../providers/Products";

const Dashboard = () => {
  const { isAuth } = useAuth();
  const { products } = useProducts();

  useEffect(() => {
    console.log(isAuth);
    console.log(products);
  }, []);

  return (
    <>
      <Header></Header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "calc(100vh - 60px)",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          padding: "50px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        {products.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
              category={item.category}
              id={item.id}
              quantity={1}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
