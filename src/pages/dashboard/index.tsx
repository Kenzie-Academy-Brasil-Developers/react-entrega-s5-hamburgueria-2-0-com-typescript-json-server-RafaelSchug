import Header from "../../components/Header";
import Card from "../../components/Card";
import { useProducts } from "../../providers/Products";

const Dashboard = () => {
  const { filteredProducts } = useProducts();

  return (
    <>
      <Header></Header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "calc(100vh - 65px)",
          justifyContent: "center",
          alignContent: "center",
          gap: "30px",
          alignItems: "flex-start",
          padding: "50px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        {filteredProducts.map((item, index) => {
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
