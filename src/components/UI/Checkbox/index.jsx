import * as Styled from "./Checkbox.styled";

const Checkbox = (props) => {
  return (
    <Styled.CheckboxContainer>
      <Styled.CheckboxLabel>
        <Styled.CheckboxInput type="checkbox" readOnly {...props}/>
        <Styled.CustomCheckbox />
      </Styled.CheckboxLabel>
    </Styled.CheckboxContainer>
  );
};

export default Checkbox;
