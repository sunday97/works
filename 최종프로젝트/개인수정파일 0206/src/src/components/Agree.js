import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useEffect, useState } from "react";
import Container from "./Container";
import styled from "styled-components";
import Button from "./Button";
function Agree() {
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [term1Checked, setTerm1Checked] = useState(false);
  const [term2Checked, setTerm2Checked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // 동의 체크 상태 변경 시 전체동의하기 체크박스 상태 업데이트
    setAgreementChecked(term1Checked && term2Checked);
  }, [term1Checked, term2Checked]);

  const handleAgreementChange = (event) => {
    const checked = event.target.checked;
    setAgreementChecked(checked);
    setTerm1Checked(checked);
    setTerm2Checked(checked);
  };

  const handleTerm1Change = (event) => {
    setTerm1Checked(event.target.checked);
  };

  const handleTerm2Change = (event) => {
    setTerm2Checked(event.target.checked);
  };

  const onClick = () => {
    if (agreementChecked) {
      navigate("SignUp");
    } else {
      alert("전체동의 해주십시오");
    }
  };

  const SelectBtn = styled(Button)`
    width: 100%;
    background-color: #1e326d;
    color: #fff;
    margin: 50px auto 0;
  `;
  return (
    <div>
      <Container className={styles.container}>
        <h1 className={styles.h1}>이용정보 동의하기</h1>
        <div className={styles.checkboxWrap}>
          <input
            type="checkbox"
            id="agreement"
            className={styles.input}
            checked={agreementChecked}
            onChange={handleAgreementChange}
          />
          <label htmlFor="agreement">전체동의하기</label>
        </div>
        <div className={styles.textareaWrap}>
          <textarea className={styles.block} style={{ whiteSpace: "pre-wrap" }}>
            {
              "약관동의 1\n\n이 부분에는 약관 내용이 들어갑니다. 줄 바꿈은 \\n으로 표현합니다."
            }
          </textarea>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              checked={term1Checked}
              onChange={handleTerm1Change}
            />
            <p>이용약관에 동의합니다</p>
          </div>
          <textarea className={styles.block} style={{ whiteSpace: "pre-wrap" }}>
            {
              "약관동의 2\n\n이 부분에는 두 번째 약관 내용이 들어갑니다. 줄 바꿈은 역시 \n\n으로 표현합니다."
            }
          </textarea>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              checked={term2Checked}
              onChange={handleTerm2Change}
            />
            <p>이용약관에 동의합니다</p>
          </div>
          <SelectBtn>
            <div onClick={onClick}>확인</div>
          </SelectBtn>
        </div>
      </Container>
    </div>
  );
}

export default Agree;
