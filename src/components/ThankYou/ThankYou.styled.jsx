import styled from "styled-components";

export const Container = styled.section`
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 36px;
  font-family: "Niconne", cursive;
  margin-top: 100px;
  line-height: 43px;
`;

export const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
`;

export const Checkmark = styled.img`
  width: 118px;
  height: 118px;
  margin: auto;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Download = styled.button`
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 30px;
`;
