import styles from "./Mypage-ProfileChange.module.css";
import man1 from "../../assets/남자1.jpg";
import { useEffect, useState } from "react";
import AddressForm from "./My-page-adressAPI";
import { doc, getAddress } from "../../api/firebase";

function MyProfile() {
  const [adr, setAdr] = useState({});
  // 현재 비밀번호
  const [nowpassword, setNowpassword] = useState("");
  // 새로운비번 / 새로운 비번 확인 / 그 새로운 비밀번호 담음
  const [newPassword, setNewPassword] = useState("");
  const [newCheckPassword, setNewCheckPassword] = useState("");
  const [finalPw, setFinalPw] = useState(false)
  // 스토리지에 들어 있는 docId / 데이터베이스에 들어 있는 docId
  const [docId, setDocId] = useState({});
  const [datadocId, setDataDocId] = useState({});
  useEffect(() => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setFinalPw(regex.test(newPassword));
  }, [newPassword]);
  const handleLoad = async () => {

    const getPwData = await getAddress("Member")
    // console.log(getPwData);
    // getPwData.forEach(e => {
    // const data = e.docId;
    const docIds = getPwData.map(e => e.docId);

    // setDocId(docIds);
    console.log(docIds);
    // });
  }
  useEffect(() => {
    handleLoad()
  }, [])

  const Ispassword = () => {
    if (!finalPw) {
      alert("정규식 일치 하지 않음")
      return false;
    } else if (newPassword !== newCheckPassword) {
      alert("비번 일치하지 않음")
      return false;
    } else {
      return true;
    }
  }
  const ChangeClick = () => {
    if (Ispassword() == true) {
      alert("완료")
    }
  }


  const profileChange = async () => {
    const getstory = JSON.parse(localStorage.getItem("Member"))
    setDocId(getstory[0].MEM_docId)
    const updateData = await updateData("Member", docId,)
  }


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
              <div className={styles.changeBtn}>기본값으로 변경하기</div>
            </div>
          </div>
          <div className={styles.adressChange}>
            <AddressForm setAdr={setAdr} />
          </div>
          <div
            className={styles.profileChangBtn}
            onClick={profileChange}
          >
            프로필 변경하기
          </div>
        </div>
        <div className={`${styles.content} ${styles.content2}`}>
          <h2 className={styles.title}>비밀번호 변경</h2>
          <div className={styles.inputBox}>
            <div>
              <label className={styles.inputLabel}>현재 비밀번호</label>
              {

              }
            </div>
            <input onChange={(e) => setNowpassword(e.target.value)} className={styles.input} />
          </div>
          <div>
            <div className={styles.inputBox}>
              <div>
                <label className={styles.inputLabel}>새로운 비밀번호</label>
              </div>
              <input onChange={(e) => setNewPassword(e.target.value)} className={styles.input} />
            </div>
            <div className={styles.inputBox}>
              <div>
                <label className={styles.inputLabel}>비밀번호 확인</label>
              </div>
              <input onChange={(e) => setNewCheckPassword(e.target.value)} className={styles.input} />
            </div>
          </div>
          <div onClick={ChangeClick} className={styles.profileChangBtn}>비밀번호 변경하기</div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;