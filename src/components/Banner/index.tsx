import { Container } from "./style";
import { FiShoppingBag } from "react-icons/fi";
import LogoImg from "../../assets/images/logomed.png";

const Banner = () => {
  return (
    <Container>
      <div className="logo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div className="content_container">
        <div className="icon_content">
          <FiShoppingBag />
        </div>
        <div className="text_content">
          A vida é como um sanduíche, é preciso recheá-la com os
          <span> melhores </span>ingredientes
        </div>
      </div>
      <div className="circles_content">
        {".................".split(".").map((_, index) => (
          <div key={index} className="circle"></div> // HAHA
        ))}
      </div>
    </Container>
  );
};

export default Banner;
