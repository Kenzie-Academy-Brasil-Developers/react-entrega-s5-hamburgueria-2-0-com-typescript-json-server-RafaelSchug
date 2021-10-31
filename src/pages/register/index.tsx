import Banner from "../../components/Banner";
import FormContainer from "../../components/FormContainer";
import { TextField } from "@mui/material";
import { MainContainer, ChildContainer } from "./styled";
import { Button } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from "../../providers/Register";
import { useAuth } from "../../providers/Auth";
import { useEffect } from "react";

interface dataSchema {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

const Register = () => {
  const { isAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth]);

  const { registerNewUser } = useRegister();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
    passwordCheck: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: dataSchema) => {
    registerNewUser(data);
  };
  return (
    <MainContainer>
      <ChildContainer className="left_container">
        <Banner />
      </ChildContainer>
      <ChildContainer className="right_container">
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div className="top_form">
            <h3>Cadastro</h3>
            <Link to="/login">Retornar para login</Link>
          </div>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
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
          <TextField
            id="outlined-basic"
            label="Confirmar Senha"
            variant="outlined"
            {...register("passwordCheck")}
            error={!!errors.passwordCheck}
            helperText={errors.passwordCheck?.message}
          />
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </FormContainer>
      </ChildContainer>
    </MainContainer>
  );
};

export default Register;
