import { Container } from "./style";
import LogoImg from "../../assets/images/logo.png";

const Logo = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <img src={LogoImg} alt="logo" />
    </Container>
  );
};

export default Logo;
