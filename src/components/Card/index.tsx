import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledMUICard } from "./style";

interface Types {
  title?: string;
  category?: string;
  price?: number;
  image?: string;
  id?: number;
}

const StyledCard = ({ title, category, price, image, id }: Types) => {
  return (
    <StyledMUICard sx={{ maxWidth: 300, width: "100%", minWidth: 230 }}>
      <CardMedia
        component="img"
        height="170"
        image="https://imagensemoldes.com.br/wp-content/uploads/2020/03/Foto-X-Burguer-Hamburguer-Cheeseburguer-PNG-1024x853.png"
        alt="ilustration"
        style={{ width: "100%", background: "#ececec" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hamburguer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sanduíches
        </Typography>
        <Typography variant="body1" color="text.primary">
          R$ 12,00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Adicionar
        </Button>
      </CardActions>
    </StyledMUICard>
  );
};
export default StyledCard;
