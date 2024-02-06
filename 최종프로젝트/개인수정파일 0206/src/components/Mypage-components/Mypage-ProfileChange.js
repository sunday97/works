import styles from "./Mypage-ProfileChange.module.css";
import man1 from "../../assets/남자1.jpg";
// import hea from "../../assets/아령.jpg";

import { useEffect, useState } from "react";
import AddressForm from "./My-page-adressAPI";
import { doc, findPassword, getAddress, pwCheckUpdate, updateData } from "../../api/firebase";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';

function MyProfile() {
  const [adr, setAdr] = useState({});
  const [initialState, setInitialState] = useState(false);
  // 현재 비밀번호 / 데이터베이스 비번
  const [nowpassword, setNowpassword] = useState("");
  const [datapassword, setDatapassword] = useState("");
  // 새로운비번 / 새로운 비번 정규식확인 / 그 새로운 비번 확인
  const [newPassword, setNewPassword] = useState("");
  const [newCheckPassword, setNewCheckPassword] = useState("");
  const [finalPw, setFinalPw] = useState("")
  // 스토리지에 들어 있는 닉네임 / 데이터베이스에 들어 있는 docId
  const [docId, setDocId] = useState("");
  const [datadocId, setDatadocId] = useState({})
  // 
  const [useDefaultImage, setUseDefaultImage] = useState(false); // State to track whether to use default image
  useEffect(() => {
    console.log(adr);
  }, [])

  const getstory = JSON.parse(localStorage.getItem("Member"))
  console.log(getstory);
  const handleLoad = async () => {
    const getdata = await getAddress("Member");
    console.log(getdata);
    const filteredData = getdata.filter(item => item.docId == getstory[0].MEM_docId);
    const basePw = filteredData[0].MEM_PASSWORD
    const baseAddress = filteredData[0].MEM_ADDRESS
    console.log(baseAddress);
    setDatapassword(basePw)

  };
  useEffect(() => {
    handleLoad()
  }, [])

  useEffect(() => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setNewCheckPassword(regex.test(newPassword));
  }, [newPassword]);

  const ChangePw = async () => {
    if (datapassword !== nowpassword) {
      alert("현재 비밀번호를 정확하게 입력하세요")
    } else if (datapassword == newPassword) {
      alert("현재 비밀번호일치 합니다. 새로운 비번으로 바꾸세요")
    } else if (!newCheckPassword) {
      alert("비밀번호는 8자 이상이며, 대문자, 소문자, 숫자, 특수 문자를 모두 포함해야 합니다.")
    } else if (newPassword !== finalPw) {
      alert("새로운 비밀번호와 바꿔준 비밀번호가 일치하지 않습니다.")
    } else {
      alert("수정이 되었습니다.")
      try {
        await updateData("Member", getstory[0].MEM_docId, {
          MEM_PASSWORD: finalPw,
        });
      } catch (error) {
        console.error("Error updating password:", error);
      }
      setNowpassword("");
      setNewPassword("")
      setFinalPw("")
    }
  }

  const profileChange = async () => {
    alert("변경되었습니다.")
    try {
      await updateData("Member", getstory[0].MEM_docId, {
        MEM_ADDRESS: { ...adr },
      });
    } catch (error) {
      console.error("Error updating password:", error);
    }
    setInitialState(true)
  }
  console.log({ ...adr });


  const handleDefaultImageChange = () => {
    setUseDefaultImage(true); // Set the state to use default image
    // Add any other logic you need when using the default image
  };
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <h2 className={styles.title}>프로필 변경</h2>
        <div className={`${styles.content} ${styles.content1}`}>
          <div className={styles.profileImgChange}>
            <div className={styles.imgWraper}>
              <img src={man1} alt="프로필사진" />

            </div>
            <div className={styles.changeBtns}>
              <div className={styles.changeBtn}>사진 변경하기</div>
              <div className={styles.changeBtn} onClick={handleDefaultImageChange}>기본값으로 변경하기</div>
            </div>
          </div>
          <div className={styles.adressChange}>
            <AddressForm setAdr={setAdr} profileChange={profileChange} initialState={initialState} />

          </div>
          <div
            className={styles.profileChangBtn}
            onClick={() => {
              profileChange();
              setAdr({});
            }}
          >
            프로필 변경하기
          </div>
        </div>
        <div className={`${styles.content} ${styles.content2}`}>
          <h2 className={styles.title}>비밀번호 변경</h2>
          <div className={styles.inputBox}>
            <div>
              <label className={styles.inputLabel}>현재 비밀번호</label>

            </div>
            <input value={nowpassword} onChange={(e) => setNowpassword(e.target.value)} className={styles.input} />

            {nowpassword === "" ? (
              <span className={styles.emptyMessage}></span>
            ) : datapassword === nowpassword ? (
              <span className={styles.matchMessage}>비밀번호 일치 새로운 비밀번호를 만드세요!!</span>
            ) : (
              <span className={styles.mismatchMessage}>비밀번호 불일치</span>
            )}

          </div>
          <div>
            <div className={styles.inputBox}>
              <div>
                <label className={styles.inputLabel}>새로운 비밀번호</label>
              </div>
              <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={styles.input} />
              {
                newPassword == "" ? "" : (newPassword === nowpassword) ? (<div>현재 비밀번호랑 같습니다. 새로운 비밀번호로 작성하세요</div>) : !newCheckPassword ? (<div> 정규식이 틀렸습니다. 알맞게 작성하세요</div>) : (<div>작성가능한 비밀번호입니다.</div>)
              }
            </div>
            <div className={styles.inputBox}>
              <div>
                <label className={styles.inputLabel}>비밀번호 확인</label>
              </div>
              <input value={finalPw} onChange={(e) => setFinalPw(e.target.value)} className={styles.input} />
              {finalPw === "" ? (
                <span className={styles.emptyMessage}></span>
              ) : finalPw === newPassword ? (
                <span className={styles.matchMessage}>비밀번호 일치</span>
              ) : (
                <span className={styles.mismatchMessage}>비밀번호 불일치</span>
              )}
            </div>
          </div>
          <div onClick={ChangePw} className={styles.profileChangBtn}>비밀번호 변경하기</div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;