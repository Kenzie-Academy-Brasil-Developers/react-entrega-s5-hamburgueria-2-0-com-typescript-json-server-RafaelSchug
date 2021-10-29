import { ReactNode } from "react";
import { BoxProps } from "@mui/system";
import { BoxStyled } from "./style";

interface FormContainerProps extends BoxProps {
  children: ReactNode;
}

const FormContainer = ({ children, ...rest }: FormContainerProps) => {
  return (
    <BoxStyled component="form" {...rest}>
      {children}
    </BoxStyled>
  );
};

export default FormContainer;
