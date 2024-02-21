import styled from "styled-components";

export const Button = styled.button`
  font-size: 17px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.primary};
  padding: 16px;
  background-color: #e4229c;
  border-radius: 50px;
  width: 100%;
  margin-top: auto;
  font-family: "Albert Sans", sans-serif;

  &:disabled {
    opacity: 40%;
  }
`;
