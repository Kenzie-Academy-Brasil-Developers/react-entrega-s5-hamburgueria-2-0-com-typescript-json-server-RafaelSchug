import { Container } from "./style";
import LogoImg from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Container>
      <img src={LogoImg} alt="logo" />
    </Container>
  );
};

export default Logo;
