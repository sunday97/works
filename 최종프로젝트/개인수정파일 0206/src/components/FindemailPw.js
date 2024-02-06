import React, { useEffect, useState } from 'react';
import styles from "./SignUp.module.css";
import styled from "styled-components";
import Button from "./Button";
import Container from './Container';
import styles1 from "./FindemailPw.module.css"
import { findEmail, findPassword, getAddress } from '../api/firebase';

function FindemailPw() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false); // 이메일 찾기 모달의 열림 상태를 관리하기 위한 상태 추가
  // 비밀번호 찾기 모달의 열림 상태를 관리하기 위한 상태 추가
  const [isPwModalOpen, setIsPwModalOpen] = useState(false);
  // 이름, 전화번호, 이메일, 찾을때 필요
  const [findemail, setFindEmail] = useState("")
  const [findname, setFindName] = useState("");
  const [findphone, setFindPhone] = useState("")
  // console.log(findphone);
  // 랜덤 숫자 저장 / 랜덤 숫자와 사용자가 작성한 숫자가 맞는지 체크
  const [random, setRandom] = useState()
  const [ranCheck, setRanCheck] = useState(false)
  // 사용자가 작성한 숫자 체크 
  const [usernumCheck, setUsernumCheck] = useState()
  // 사용자가 올바르지 않은 인증 코드를 입력한 경우를 추적하고, 초기값을 false로 설정합니다.
  const [isAuthenticationFailed, setIsAuthenticationFailed] = useState(false);
  const [newData, setNewData] = useState([]);
  const SelectBtn = styled(Button)`
    width: 100%;
    background-color: #1e326d;
    color: #fff;
    margin: 50px auto 0;
  `;

  const openEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const openPwModal = () => {
    setIsPwModalOpen(true);
  };

  const closeEmailModal = () => {
    setIsEmailModalOpen(false);
    setIsAuthenticationFailed(false);
  };

  const closePwModal = () => {
    setIsPwModalOpen(false);
    setIsAuthenticationFailed(false);
  };


  const handleLoad = async () => {
    const getdata = await findEmail("Member", findname, findphone);
    console.log(getdata);


  };

  useEffect(() => {
    onClick()
  }, []);

  const FindNameChange = (e) => {
    setFindName(e.target.value)
  }
  const FindPhoneChange = (e) => {
    setFindPhone(e.target.value)
  }
  const FindEmailChange = (e) => {
    setFindEmail(e.target.value)
  }

  const onClick = async (name) => {

    console.log(random);
    if (name == "이메일") {
      const getdata = await findEmail("Member", findname, findphone);
      setNewData(getdata)
    } else {
      const getdata = await findPassword("Member", findemail, findname, findphone)
      setNewData(getdata)
      console.log(getdata);
    }
  }

  const userNumber = (e) => {
    setUsernumCheck(e.target.value)
    console.log(usernumCheck);
  }
  const userNumberClick = () => {
    const check = usernumCheck;
    if (random === parseInt(check)) {
      setRanCheck(true);
      setIsAuthenticationFailed(false); // 성공적인 확인 시 인증 상태를 재설정합니다.
    } else {
      setRanCheck(false);
      setIsAuthenticationFailed(true);
    }
  }

  const userEmail = () => {

  }

  const getnumber = () => {
    const min = 1000; // 최소값 (1000 이상)
    const max = 9999; // 최대값 (9999 이하)

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setRandom(randomNumber);
  }
  console.log(random);
  console.log(newData);
  return (
    <div>
      <Container>
        <form className={styles.container}>
          <h1 className={styles.h1}>이메일 / 비밀번호 찾기</h1>
          <div>
            <div className={styles.email}>
              <label htmlFor="name">이름</label>
              <input
                className={styles.width}
                type="name"
                id="name"
                placeholder="이름 입력"
                onChange={FindNameChange}
              />
            </div>
          </div>
          <div className={styles.pw}>
            <label htmlFor="tel">전화번호</label>
            <div>
              <input
                className={styles.width}
                type="tel"
                id="tel"
                placeholder="전화번호 작성"
                onChange={FindPhoneChange}
              />
            </div>
          </div>

          <SelectBtn style={{ marginBottom: "30px" }} onClick={openEmailModal}>
            <div onClick={() => onClick("이메일")} style={{ color: "white" }}>이메일 찾기</div>
          </SelectBtn>
          {/* 모달 창 */}
          {isEmailModalOpen && (
            <div className={styles.modal}>
              <div className={styles1.modalContent}>
                <span className={styles.close} onClick={closeEmailModal}>&times;</span>
                <h2>이메일 찾기 결과</h2>
                {
                  newData ? (<div className={styles1.color}>{newData?.MEM} 입니다.</div>) : (<div className={styles1.red}>정보를 정확히 입력하세요!!</div>)
                }
              </div>
            </div>
          )}

          {
            isPwModalOpen && (
              <div className={styles.modal}>
                <div className={styles1.modalContent}>
                  <span className={styles.close} onClick={closePwModal}>&times;</span>
                  <h2>받을 이메일 작성</h2>
                  <input typ="email" onChange={userEmail} />
                  <div onClick={getnumber}>이메일로 인증번호 받기</div>
                  <h2>숫자를 적는곳</h2>
                  <input typ="number" onChange={userNumber} />
                  <div onClick={userNumberClick}>인증번호 확인</div>
                  {
                    ranCheck && (<div className={styles1.color}>{newData?.MEM_PASSWORD} 입니다.</div>)
                  }
                  {isAuthenticationFailed && <div className={styles1.red}>인증번호가 틀렸습니다. 다시 시도해주세요.</div>}
                </div>
              </div>

            )
          }


          <div className={styles.email}>
            <label htmlFor="email">이메일</label>
            <input
              className={styles.width}
              type="name"
              id="name"
              placeholder="이메일 입력"
              onChange={FindEmailChange}
            />
          </div>
          <div >
            <div className={styles.email}>
              <label htmlFor="name">이름</label>
              <input
                className={styles.width}
                type="name"
                id="name"
                placeholder="이름 입력"
                onChange={FindNameChange}
              />
            </div>
          </div>
          <div className={styles.pw}>
            <label htmlFor="tel">전화번호</label>
            <div>
              <input
                className={styles.width}
                type="tel"
                id="tel"
                placeholder="전화번호 작성"
                onChange={FindPhoneChange}
              />
            </div>
          </div>
          <SelectBtn onClick={openPwModal}>
            <div onClick={() => onClick("비밀번호")} >비밀번호 찾기</div>
          </SelectBtn>
        </form>
      </Container>
    </div>
  );
}

export default FindemailPw;