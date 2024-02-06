import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "./Container";
import styles from "./SignUp.module.css";
import styled from "styled-components";
import Button from "./Button";
import { useEffect, useState } from "react";
import { getAddress, getData } from "../api/firebase";

function Login({ setItems }) {
  const [okokemail, setOkokemail] = useState("");
  const [memberData, setMemberData] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [newData, setNewData] = useState([]);
  const [password, setPassword] = useState("");
  const [forceRender1, setForceRender1] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const googleEmail = location.state?.googleEmail || "";

  const handleLoad = async () => {
    const getdata = await getAddress("Member");
    const newData = getdata.map((item, index) => ({
      MEM_docId: item.MEM_docId,
      MEM: item.MEM,
      MEM_PASSWORD: item.MEM_PASSWORD,
      MEM_ADDRESS: item.MEM_ADDRESS,
      MEM_GENDER: item.MEM_GENDER,
      MEM_JOINDATE: item.MEM_JOINDATE,
      MEM_NAME: item.MEM_NAME,
      MEM_NICKNAME: item.MEM_NICKNAME,
      MEM_PHONE: item.MEM_PHONE,
    }));
    setNewData(newData);
    if (newData.some((item) => item.MEM === okokemail)) {
      setEmailExists(true);
    } else {
      setEmailExists(false);
    }
  };

  const SelectBtn = styled(Button)`
    width: 100%;
    background-color: #1e326d;
    color: #fff;
    margin: 50px auto 0;
  `;

  const handleEmailChange = (event) => {
    setOkokemail(event.target.value);
    setEmailExists(false);
  };

  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const isLoginValid = newData.filter(
      (item) =>
        (item.MEM === okokemail ||
          item.MEM === email ||
          item.MEM === googleEmail) &&
        item.MEM_PASSWORD === password
    );

    const story = isLoginValid.map((item) => ({
      MEM_docId: item.MEM_docId,
      MEM: item.MEM,
      MEM_ADDRESS: item.MEM_ADDRESS,
      MEM_GENDER: item.MEM_GENDER,
      MEM_JOINDATE: item.MEM_JOINDATE,
      MEM_NAME: item.MEM_NAME,
      MEM_NICKNAME: item.MEM_NICKNAME,
      MEM_PHONE: item.MEM_PHONE,
    }))

    if (isLoginValid.length > 0) {
      alert("로그인 성공");
      localStorage.setItem("Member", JSON.stringify(story))
      navigate("/")
      setForceRender1((prev) => !prev);
      // 로그인 성공 시 처리할 코드 작성
    } else {
      alert("이메일과 비밀번호를 정확하게 작성하세요");
    }
  };

  useEffect(() => {
    handleLoad();
  }, [okokemail]);

  return (
    <>
      <Container className={styles.mainContainer}>
        <h1 className={styles.h1}>로그인</h1>
        <form className={styles.container}>
          <div>
            <div className={styles.email}>
              <label htmlFor="email">이메일</label>
              <input
                className={styles.width}
                type="email"
                id="email"
                placeholder="ex) styled@DW.kr"
                value={email || googleEmail || okokemail}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className={styles.pw}>
            <label htmlFor="password">비밀번호</label>
            <div>
              <input
                className={styles.width}
                type="password"
                id="password"
                placeholder="비밀번호 작성"
                onChange={handlePwChange}
              />
            </div>
          </div>
          <div style={{ textAlign: "end" }}>
            <p>
              <Link to={"findempw"}>이메일 찾기</Link> /{" "}
              <Link to={"findempw"}>
                <span>비밀번호 찾기</span>
              </Link>
            </p>
          </div>
          <SelectBtn>
            <div onClick={handleLogin}>로그인 하기</div>
          </SelectBtn>
          <SelectBtn>
            <div onClick={() => setItems(true)}>회원가입 하러가기</div>
          </SelectBtn>
        </form>
      </Container>
    </>
  );
}

export default Login;