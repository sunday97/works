import { useRef } from "react";
import Input from "./Input";
import styled from "styled-components";

const Div = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 400px;
  margin: 100px auto;

  ${Input} {
    display: block;
    width: 100%;
    margin: 8px 0px 16px;
    box-sizing: border-box;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

function Practice2() {
  const inputRef = useRef();
  const onFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };
  return (
    <Div>
      <h1>로그인</h1>
      <label htmlFor="temp">예시</label>
      <Input type="email" id="temp" placeholder="htmlFor=''를 사용했습니다." />
      <Label>
        아이디
        <Input
          type="email"
          placeholder="label태그 안에 input태그를 넣었습니다."
        />
      </Label>
      <label onClick={onFocus}>비밀번호</label>
      <Input ref={inputRef} type="email" placeholder="******" />
    </Div>
  );
}

export default Practice2;
