import styled from "styled-components";

const Button = styled.button`
  background-color: purple;
  width: 100%;
  border: none;
  color: #fff;
  padding: 16px;
  font-size: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

export default Button;
