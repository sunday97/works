import styles from "./Mypage-ProfileChange.module.css";
import man1 from "../../assets/남자1.jpg";
import { useEffect, useState } from "react";
import AddressForm from "./My-page-adressAPI";

function MyProfile() {
  const [adr, setAdr] = useState({});

  console.log(adr);

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
            onClick={() => {
              console.log(adr);
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
            <input className={styles.input} />
          </div>
          <div>
            <div className={styles.inputBox}>
              <div>
                <label className={styles.inputLabel}>새로운 비밀번호</label>
              </div>
              <input className={styles.input} />
            </div>
            <div className={styles.inputBox}>
              <div>
                <label className={styles.inputLabel}>비밀번호 확인</label>
              </div>
              <input className={styles.input} />
            </div>
          </div>
          <div className={styles.profileChangBtn}>비밀번호 변경하기</div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
