import Header from "../../components/Header";
import StyledCard from "../../components/Card";

const Dashboard = () => {
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
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
      </div>
    </>
  );
};

export default Dashboard;
