import styled from "styled-components";

const SIZE = {
  large: 24,
  medium: 20,
  small: 16,
};
// const ROUND = { round: 50 };

const Button = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px;
  // 9999px과 100%는 다르다.
  border-radius: ${({ $round }) => ($round ? `9999px` : `3px`)};
  &:hover,
  &:active {
    background-color: #463770;
  }
`;

export default Button;
