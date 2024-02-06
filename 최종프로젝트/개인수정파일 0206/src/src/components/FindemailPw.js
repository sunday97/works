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
  };

  const closePwModal = () => {
    setIsPwModalOpen(false);
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
    if (name == "이메일") {
      const getdata = await findEmail("Member", findname, findphone);
      setNewData(getdata)
    } else {
      const getdata = await findPassword("Member", findemail, findname, findphone)
      setNewData(getdata)
      console.log(getdata);
    }



  }



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

          {isPwModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closePwModal}>&times;</span>
                <h2>비밀번호 찾기 결과</h2>
                {
                  newData ? (<div className={styles1.color}>{newData?.MEM_PASSWORD} 입니다.</div>) : (<div className={`${styles1.red}`}>정보를 정확히 입력하세요!!</div>)
                }
              </div>
            </div>
          )}

          <label htmlFor="email">이메일</label>
          <div className={styles.emailflex}>
            <input
              className={styles.selectemail}
              type="name"
              id="name"
              placeholder="이메일 입력"
              onChange={FindEmailChange}
            />

            <select className={styles.selectemail}>
              <option value="직접입력">직접입력</option>
              <option value="@gmail.com">@gmail.com</option>
              <option value="@naver.com">@naver.com</option>
            </select>
          </div>
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
          <SelectBtn onClick={openPwModal}>
            <div onClick={() => onClick("비밀번호")} >비밀번호 찾기</div>
          </SelectBtn>
        </form>
      </Container>
    </div>
  );
}

export default FindemailPw;