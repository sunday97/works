import styled from "styled-components";
import Link from "./Link";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import KakaoButtton from "./KakaoButton";

const Logo = styled.h1`
  text-align: center;
  background: linear-gradient(to right, blue, purple);
  background-clip: text;
  color: transparent;
`;

const Description = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 400px;
  margin: 40px auto;
`;

function Login() {
  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요? <Link>화원가입 하기</Link>
      </Description>
      <form>
        <Label htmlFor="email">이메일</Label>
        <Input placeholder="kkk@gmail.com" id="email"></Input>
        <Label htmlFor="pw">비밀번호</Label>
        <Input placeholder="비밀번호" id="pw"></Input>
        <Button>로그인하기</Button>
      </form>
      <KakaoButtton>카카오로그인</KakaoButtton>
    </Container>
  );
}

export default Login;
