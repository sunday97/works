import styled, { css } from "styled-components";

const SIZE = {
  large: 24,
  medium: 20,
  small: 16,
};

// css 함수 => css 자체를 변수처리할 수 있다.
const fontSize = css`
  font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px;
`;

const Button = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  ${fontSize} /* font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px; */

  &:active {
    opacity: 0.8;
  }
`;

const Input = styled.input`
  padding: 16px;
  border-radius: 4px;
  border: 2px solid #eee;
  outline: none;
  ${fontSize}/* font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px; */
`;

const Container = styled.div`
  ${Button}, ${Input} {
    margin: 10px;
  }
`;

function Reuse() {
  return (
    <Container>
      <h2>Button</h2>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h2>Input</h2>
      <Input size="small" />
      <Input size="medium" />
      <Input size="large" />
    </Container>
  );
}

export default Reuse;
