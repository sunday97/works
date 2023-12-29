import styled from "styled-components";

const Input = styled.input`
  padding: 16px 0;
  border: none;
  border-bottom: 2px solid #d9d9d9;
  outline: none;
  width: 100%;
  margin-bottom: 20px;

  &:focus {
    border-color: purple;
  }
`;

export default Input;
