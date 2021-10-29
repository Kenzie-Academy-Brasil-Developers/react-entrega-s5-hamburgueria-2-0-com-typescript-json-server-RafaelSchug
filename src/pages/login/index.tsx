import Banner from "../../components/Banner";
import FormContainer from "../../components/FormContainer";
import { TextField, Button } from "@mui/material";
import { MainContainer, ChildContainer } from "./styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  interface dataSchema {
    name: string;
    email: string;
    password: string;
    passwordCheck: string;
  }

  const schema = yup.object().shape({
    name: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: dataSchema) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <MainContainer>
      <ChildContainer className="left_container">
        <Banner />
      </ChildContainer>
      <ChildContainer className="right_container">
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div className="top_form">
            <h3>Login</h3>
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("name")}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            {...register("password")}
          />
          <Button type="submit" variant="contained">
            Logar
          </Button>
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
