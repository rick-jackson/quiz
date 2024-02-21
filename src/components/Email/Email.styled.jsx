import styled from "styled-components";

export const Wrapper = styled.section`
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: "Albert Sans", sans-serif;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 30px;
  margin-top: 72px;
`;

export const Subtitle = styled.h2`
  margin-top: 12px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.third};
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    margin-top: 56px;
  }
`;

export const PrivacyPolicy = styled.span`
  margin-top: 56px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #b6b8c3;

  span {
    color: #eb2f9a;
  }
`;
