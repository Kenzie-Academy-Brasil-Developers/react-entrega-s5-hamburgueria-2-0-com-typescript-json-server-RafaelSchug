import Banner from "../../components/Banner";
import FormContainer from "../../components/FormContainer";
import { TextField, Button } from "@mui/material";
import { MainContainer, ChildContainer } from "./styled";

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
            <p>Retornar para login</p>
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
