import Banner from "../../components/Banner";
import FormContainer from "../../components/FormContainer";
import { TextField, Button } from "@mui/material";
import { MainContainer, ChildContainer } from "./styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router";
import { useEffect } from "react";

const Login = () => {
  interface dataSchema {
    email: string;
    password: string;
  }

  const { login, isAuth } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
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
    login(data);
  };

  // useEffect(() => {
  //   if (isAuth) {
  //     history.push("/");
  //   }
  // }, [isAuth]);

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
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained">
            Logar
          </Button>
          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome
          </span>
          <Button variant="contained" onClick={() => history.push("/register")}>
            Cadastrar
          </Button>
        </FormContainer>
      </ChildContainer>
    </MainContainer>
  );
};

export default Login;
