import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
// import styles from "./SignUp.module.css"

function Login() {
  const location = useLocation();
  console.log(location);
  const email = location.state?.email || "";
  return (
    <>
      <Container>
        <h1>로그인</h1>
        <form>
          <div>
            <label for="email">이메일</label>
            <div>
              <input
                type="email"
                id="email"
                placeholder="ex) styled@DW.kr"
                value={email}
              />
            </div>
          </div>
          <div>
            <label for="password">비밀번호</label>
            <div>
              <input
                type="password"
                id="password"
                placeholder="비밀번호 작성"
              />
            </div>
          </div>
          <div>로그인 하기</div>
          <Link to={"SignUp"}>회원가입 하러가기</Link>
        </form>
      </Container>
    </>
  );
}

export default Login;
