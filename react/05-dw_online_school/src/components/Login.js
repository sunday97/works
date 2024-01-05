import styled from "styled-components";
import Link from "./Link";
import Input from "./Input";
import Label from "./Label";
import Button from "./LoginButton";
import KakaoButton from "./KakaoButton";
import { useState } from "react";
import { getMember } from "../api/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useMember, useSetMember } from "../contexts/MemberContext";

const Logo = styled.h1`
  font-family: Pretendard;
  text-align: center;
  font-size: 40px;
  background-image: linear-gradient(135deg, aqua, purple);
  background-clip: text;
  color: transparent;
`;

const Description = styled.div`
  color: #848187;
  text-align: center;
`;

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
  }
  ${Button} {
    width: 100%;
    margin: 8px 0;
  }
`;

function Login() {
  // const member = useMember();
  // const setMember = useSetMember();

  // const props = useLocation();
  // console.log(props);
  const { state } = useLocation();

  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { memberObj, message } = await getMember(values);
    if (message === undefined) {
      // localStorage는 도메인이 기준이다.
      localStorage.setItem("member", JSON.stringify(memberObj));
      // alert("로그인에 성공했습니다.");

      // window.location.href = "/";
      // 창이 새로 로딩됨. 리액스스럽지 못함

      // setMember(memberObj);

      // useNavigate()
      navigate(state ? state : "/");
    } else {
      alert(message);
      console.log(memberObj);
    }
  };

  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이아니신가요? <Link href="#">회원가입하기</Link>
      </Description>
      <form onSubmit={handleLogin}>
        <Label htmlFor="email">아이디</Label>
        <Input
          type="email"
          name="id"
          id="email"
          placeholder="ssd@sdfs.sdfds"
          onChange={handleValueChange}
        ></Input>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          onChange={handleValueChange}
        ></Input>
        <Button type="submit">로그인하기</Button>
      </form>
      <KakaoButton />
    </Container>
  );
}

export default Login;
