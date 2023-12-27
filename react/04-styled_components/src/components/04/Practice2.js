import { useRef } from "react";
import Input from "./Input";
import styled from "styled-components";

const inputRef = useRef();

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 100px auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const focus = () => {
  inputRef.current.focus();
  console.log(inputRef.current);
};

function Practice2() {
  return (
    <Div>
      <h1>로그인</h1>
      <Label>
        아이디
        <Input type="email" placeholder="kimtaeyang@gmail.com" />
      </Label>
      <label onClick={focus}>비밀번호</label>
      <Input ref={inputRef} type="email" placeholder="******" />
    </Div>
  );
}

export default Practice2;
