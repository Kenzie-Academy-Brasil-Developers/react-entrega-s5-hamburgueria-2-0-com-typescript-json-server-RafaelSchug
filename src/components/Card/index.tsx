import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledMUICard } from "./style";
import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";

interface CartSchema {
  title: string;
  image: string;
  category: string;
  price: number;
  userId?: number;
  id: number;
  quantity: number;
}

const StyledCard = ({ title, category, price, image, id }: CartSchema) => {
  const { isAuth } = useAuth();
  const { addProductToCart } = useCart();
  return (
    <StyledMUICard>
      <div className="ProductCardHeader">
        <CardMedia
          component="img"
          image={image}
          alt="ilustration"
          style={{
            width: "140px",
            objectFit: "contain",
            height: "140px",
          }}
        />
      </div>
      <div className="ProductCardMain">
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ marginBottom: 0 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#828282" }}
        >
          {category}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {Number(price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
        {isAuth && (
          <Button
            size="small"
            variant="contained"
            sx={{ color: "#fff" }}
            onClick={() => addProductToCart(id)}
          >
            Adicionar
          </Button>
        )}
      </div>
    </StyledMUICard>
  );
};
export default StyledCard;
