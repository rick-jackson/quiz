import * as Styled from "./Button.styled";

const Button = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default Button;
