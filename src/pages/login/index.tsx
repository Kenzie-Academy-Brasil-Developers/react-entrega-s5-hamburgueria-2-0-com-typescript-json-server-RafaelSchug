import Banner from "../../components/Banner";
import FormContainer from "../../components/FormContainer";
import { TextField, Button } from "@mui/material";
import { MainContainer, ChildContainer } from "./styled";

const Login = () => {
  return (
    <MainContainer>
      <ChildContainer className="left_container">
        <Banner />
      </ChildContainer>
      <ChildContainer className="right_container">
        <FormContainer>
          <div className="top_form">
            <h3>Login</h3>
          </div>
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <Button variant="contained">Logar</Button>
          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome
          </span>
          <Button variant="contained">Cadastrar</Button>
        </FormContainer>
      </ChildContainer>
    </MainContainer>
  );
};

export default Login;
