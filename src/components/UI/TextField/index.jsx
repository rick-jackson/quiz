import * as Styled from "./TextField.styled";

const TextField = ({ error, ...props }) => {
  return (
    <Styled.Wrapper>
      <Styled.TextField $error={error} {...props} />
      {error && <Styled.ErrorText>Invalid email</Styled.ErrorText>}
    </Styled.Wrapper>
  );
};

export default TextField;
