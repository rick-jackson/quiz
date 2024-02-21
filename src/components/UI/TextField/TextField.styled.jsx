import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  position: relative;
`;

export const TextField = styled.input`
  border-radius: 16px;
  background-color: #36173d;
  border: none;
  padding: 20px;
  color: #fff;
  width: 100%;
  ${({ $error }) => $error && "outline: 1px solid red;"}
  height: 76px;

  &:focus {
    outline: 1px solid #d0006e;
  }
`;

export const ErrorText = styled.span`
  color: red;
  position: absolute;
  left: 5px;
  bottom: -25px;
`;
