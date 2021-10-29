import { Container } from "./style";
import { FiShoppingBag } from "react-icons/fi";

const Banner = () => {
  return (
    <Container>
      <div className="logo_title">
        <strong>
          <span>Burger </span>Kenzie
        </strong>
      </div>
      <div className="content_container">
        <div className="icon_content">
          <FiShoppingBag />
        </div>
        <div className="text_content">
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes
        </div>
      </div>
    </Container>
  );
};

export default Banner;
