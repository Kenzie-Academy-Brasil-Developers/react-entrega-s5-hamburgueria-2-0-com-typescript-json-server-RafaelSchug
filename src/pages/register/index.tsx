import Banner from "../../components/Banner";
import FormContainer from "../../components/FormContainer";
import { TextField } from "@mui/material";
import { MainContainer, ChildContainer } from "./styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <MainContainer>
      <ChildContainer className="left_container">
        <Banner />
      </ChildContainer>
      <ChildContainer className="right_container">
        <FormContainer>
          <div className="top_form">
            <h3>Cadastro</h3>
            <Link to="/login">Retornar para login</Link>
          </div>
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Confirmar Senha"
            variant="outlined"
          />
          <Button variant="contained">Cadastrar</Button>
        </FormContainer>
      </ChildContainer>
    </MainContainer>
  );
};

export default Register;
