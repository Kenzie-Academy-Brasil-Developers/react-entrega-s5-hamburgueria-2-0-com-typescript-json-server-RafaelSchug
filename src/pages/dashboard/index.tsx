import Header from "../../components/Header";
import Card from "../../components/Card";
import { useProducts } from "../../providers/Products";
import LogoImg from "../../assets/images/logomed.png";
import { LoadingContainer, MainContainer } from "./style";

const Dashboard = () => {
  const { filteredProducts } = useProducts();

  return (
    <>
      <Header></Header>
      <MainContainer>
        {filteredProducts.length ? (
          filteredProducts.map((item, index) => {
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
          })
        ) : (
          <LoadingContainer>
            <div>
              <img src={LogoImg} alt="ilustration" />
            </div>
          </LoadingContainer>
        )}
      </MainContainer>
    </>
  );
};

export default Dashboard;
