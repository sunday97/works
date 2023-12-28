import styled from "styled-components";

const SIZE = {
  large: 24,
  medium: 20,
  small: 16,
};

const Input = styled.input`
  padding: 16px;
  border: 2px solid ${({ $error }) => ($error ? `#f44336` : `#eee`)};
  outline: none;
  font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `4px`)};

  &:focus {
    border-color: ${({ $error }) => ($error ? `#f44336` : `#7760b4`)};
  }
`;

export default Input;
