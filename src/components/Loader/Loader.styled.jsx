import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.color.primary};
  font-size: 17px;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Percent = styled.div`
  position: relative;
  width: 252px;
  height: 252px;
  border-radius: 50%;
  z-index: 1000;
  transform: rotate(-90deg);
`;

export const Svg = styled.svg`
  position: relative;
  width: 252px;
  height: 252px;
  z-index: 1000;

  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: #e8eaf2;
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(5px, 5px);
  }

  circle:nth-child(2) {
    stroke-dasharray: 752;
    stroke-dashoffset: 752;
  }

  circle:nth-child(2) {
    stroke-dashoffset: calc(
      752 - (752 * ${({ $progress }) => $progress}) / 100
    );
    stroke: ${({ theme }) => theme.background.secondary};
  }
`;

export const Circle = styled.circle``;

export const Num = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: "Albert Sans", sans-serif;
  font-size: 52px;
  transform: rotate(90deg);

  h2 {
    font-weight: 700;
    transition: 0.5s;
  }

  span {
    transition: 0.5s;
  }
`;

export const Text = styled.span`
  margin-top: 40px;
  max-width: 200px;
  text-align: center;
`;
