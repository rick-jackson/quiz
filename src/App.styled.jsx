import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100%;
  background-color: ${({ theme }) => theme.background.main};
`;

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
