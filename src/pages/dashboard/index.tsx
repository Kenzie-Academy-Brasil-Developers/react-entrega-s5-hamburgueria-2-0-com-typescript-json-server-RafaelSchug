import Header from "../../components/Header";
import Card from "../../components/Card";
import { useAuth } from "../../providers/Auth";
import { useEffect } from "react";

const Dashboard = () => {
  const { isAuth } = useAuth();

  useEffect(() => {
    console.log(isAuth);
  }, []);

  return (
    <>
      <Header></Header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "calc(100vh - 60px)",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          padding: "50px",
        }}
      >
        <Card></Card>
      </div>
    </>
  );
};

export default Dashboard;
