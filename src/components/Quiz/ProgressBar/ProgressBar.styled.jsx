import styled from "styled-components";

export const Wrapper = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Progress = styled.div`
  width: 100%;
  height: 4px;
  margin-top: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;

  &::before {
    content: "";
    display: block;
    transition: 0.4s;
    background-color: ${({ theme }) => theme.background.secondary};
    height: 4px;
    position: absolute;
    border-radius: 4px;
    top: 0;
    left: 0;
    width: ${({ $currentQuestionIndex, $questionsLength }) =>
      `calc(${$currentQuestionIndex / $questionsLength} * 100%)`};
  }
`;

export const Count = styled.div`
  font-family: "Albert Sans", sans-serif;
  font-size: 18px;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: 4px;
`;

export const CurrentQuestion = styled.span`
  color: ${({ theme }) => theme.color.secondary};
`;
