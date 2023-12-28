import styled from "styled-components";

// const Input = styled.input`
//   padding: 16px;
//   border-radius: 4px;
//   border: 2px solid #eee;
//   outline: none;
//   font-size: 20px;

//   /* 박스 사이즈 맞추기 */
//   box-sizing: border-box;
//   width: 400px;
// `;

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

  ${({ $error }) => !$error && `&;focus { border-color : #7760b4}`}
`;

export default Input;
