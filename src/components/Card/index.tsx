import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledMUICard } from "./style";
import { useAuth } from "../../providers/Auth";

interface Types {
  title?: string;
  category?: string;
  price?: number;
  image?: string;
  id?: number;
}

const StyledCard = ({ title, category, price, image, id }: Types) => {
  const { isAuth } = useAuth();
  return (
    <StyledMUICard>
      <div className="image_wrapper">
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
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {Number(price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </CardContent>
      <CardActions>
        {isAuth && (
          <Button size="small" variant="contained" sx={{ color: "#fff" }}>
            Adicionar
          </Button>
        )}
      </CardActions>
    </StyledMUICard>
  );
};
export default StyledCard;
