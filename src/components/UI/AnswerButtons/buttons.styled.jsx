import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
  padding: 18px 20px;
  border-radius: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  flex: none;
  ${({ $isActive }) =>
    $isActive && `outline: 1px solid #E4229B; background: #e4229b33;`}

  &:hover {
    background: #e4229b33;
  }
`;

export const ButtonImage = styled(Button)`
  flex: 0;
  text-align: center;
  line-height: 1.5;
  padding: 18px 15px;

  &::first-letter {
    font-size: 52px;
  }
`;

export const SelectButton = styled(Button)`
  display: flex;
  justify-content: space-between;
`;

export const CircleButton = styled(Button)`
  border-radius: 50px;
  font-size: 13px;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  white-space: break-spaces;
  font-weight: 400;

  &:nth-child(even) {
    margin-top: 20px;
  }

  span::first-letter {
    font-size: 25px;
  }
`;
