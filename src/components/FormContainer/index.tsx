import { ReactNode } from "react";
import { BoxStyled } from "./style";

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
  return <BoxStyled component="form">{children}</BoxStyled>;
};

export default FormContainer;
