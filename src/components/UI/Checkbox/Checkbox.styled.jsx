import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckboxLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-left: 23px;
  padding-bottom: 18px;
  user-select: none;
`;

export const CustomCheckbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: ${({ theme }) => theme.background.third};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: 8px;

  ${CheckboxInput}:checked + & {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 7px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid ${({ theme }) => theme.color.primary};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  ${CheckboxInput}:checked + &:after {
    display: block;
  }
`;
