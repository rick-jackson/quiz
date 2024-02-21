import Checkbox from "../Checkbox";

import * as Styled from "./buttons.styled";

const AnswerButtons = () => {
  const SingleSelect = ({ children, ...props }) => (
    <Styled.Button {...props}>{children}</Styled.Button>
  );

  const SingleSelectImage = ({ children, ...props }) => (
    <Styled.ButtonImage {...props}>
      <span>{children}</span>
    </Styled.ButtonImage>
  );

  const MultipleSelect = ({ children, ...props }) => (
    <Styled.SelectButton {...props}>
      {children} <Checkbox checked={props.$isActive} />
    </Styled.SelectButton>
  );

  const Bubble = ({ children, ...props }) => (
    <Styled.CircleButton {...props}>
      <span>{children}</span>
    </Styled.CircleButton>
  );

  return { SingleSelect, SingleSelectImage, MultipleSelect, Bubble };
};

export default AnswerButtons;
