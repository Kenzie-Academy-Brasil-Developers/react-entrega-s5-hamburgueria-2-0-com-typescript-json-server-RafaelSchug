import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../Logo";
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
import { Typography } from "@mui/material";
import { CartCard, EmptyCart, StyledBox, TotalContainer } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  maxWidth: 400,
  width: "calc(100% - 20px)",
  margin: "0 auto",
  boxShadow: 24,
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
    removeAllProductsFromCart,
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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledBox sx={style}>
          <div className="box_header">
            <h4>Carrinho de compras</h4>
            <span onClick={handleClose}>
              <CloseIcon />
            </span>
          </div>

          {cart.length ? (
            <>
              <div className="box_body">
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
                            style={{ color: "#fff", boxShadow: "unset" }}
                            onClick={() => decreaseProductQuantity(item.id)}
                          >
                            <RemoveIcon />
                          </Fab>
                          <Typography variant="body2">
                            {item.quantity}
                          </Typography>
                          <Fab
                            size="small"
                            color="primary"
                            aria-label="add"
                            style={{ color: "#fff", boxShadow: "unset" }}
                            onClick={() => increaseProductQuantity(item.id)}
                          >
                            <AddIcon />
                          </Fab>
                        </div>
                      </div>
                      <div className="button_content">
                        <DeleteIcon
                          onClick={() => removeProductFromCart(item.id)}
                        />
                      </div>
                    </CartCard>
                  );
                })}
              </div>
              <div
                style={{
                  padding: "20px 10px",
                  background: "#fff",
                  borderTop: "2px solid #ccc",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <TotalContainer>
                  <h3>Total</h3>
                  <h3>
                    {cart
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </h3>
                </TotalContainer>
                <div className="box_footer">
                  <Button
                    variant="contained"
                    onClick={removeAllProductsFromCart}
                  >
                    Remover Todos
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart>
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </EmptyCart>
          )}
        </StyledBox>
      </Modal>
      <AppBar
        position="sticky"
        style={{ background: "#F5F5F5", boxShadow: "0 0 1px 0px #4c4c4c" }}
      >
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
                  badgeContent={cart.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                  )}
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
              style={{ color: "#fff", fontWeight: "bold", boxShadow: "unset" }}
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
