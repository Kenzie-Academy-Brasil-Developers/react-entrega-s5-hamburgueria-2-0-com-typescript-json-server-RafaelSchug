import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../logo";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useCart } from "../../providers/Cart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import Fab from "@mui/material/Fab";
import { CardMedia, Container, Typography } from "@mui/material";
import { CartCard } from "./style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "20px",
} as const;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Header = () => {
  const {
    cart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCart();
  const { logout, isAuth } = useAuth();
  const history = useHistory();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {cart.map((item, index) => {
            return (
              <CartCard key={index}>
                <div className="image_content">
                  <img src={item.image} alt="ilustration" />
                </div>
                <div className="item_information">
                  <Typography variant="h3">{item.title}</Typography>
                  <div className="item_control">
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="add"
                      style={{ color: "#fff" }}
                      onClick={() => decreaseProductQuantity(item.id)}
                    >
                      <RemoveIcon />
                    </Fab>
                    <Typography variant="body2">{item.quantity}</Typography>
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="add"
                      style={{ color: "#fff" }}
                      onClick={() => increaseProductQuantity(item.id)}
                    >
                      <AddIcon />
                    </Fab>
                  </div>
                </div>
                <div className="button_content">
                  <Button
                    variant="text"
                    onClick={() => removeProductFromCart(item.id)}
                  >
                    Remover
                  </Button>
                </div>
              </CartCard>
            );
          })}
          <div
            style={{
              borderTop: "2px solid #ccc",
              marginTop: "10px",
              paddingTop: "10px",
            }}
          >
            <Button variant="contained" sx={{ color: "#fff" }}>
              Remover Todos
            </Button>
          </div>
        </Box>
      </Modal>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#fff" }}>
          <Toolbar>
            <Logo />
            <div style={{ flex: "1" }} />
            <Search sx={{ border: "1px solid #c3c3c3" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {isAuth && (
              <>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={handleOpen}
                >
                  <Badge
                    badgeContent={cart.reduce((acc) => acc + 1, 0)}
                    color="error"
                  >
                    <LocalMallIcon />
                  </Badge>
                </IconButton>
                <IconButton size="large" color="inherit" onClick={logout}>
                  <Badge>
                    <LogoutIcon />
                  </Badge>
                </IconButton>
              </>
            )}
            {!isAuth && (
              <Button
                variant="contained"
                style={{ color: "#fff" }}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
