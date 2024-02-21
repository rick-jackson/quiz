import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin-top: 18px;
  text-align: center;
  padding: 4px;
  padding-top: 26px;
  animation: ${fadeIn} 1s linear;
  display: flex;
  height: calc(100% - 57px);
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;

  span {
    color: #e4229b;
  }
`;

export const Subtitle = styled.h2`
  font-size: 17px;
  line-height: 24px;
  margin-top: 16px;
  color: #c4c8cc;
`;

export const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
`;
