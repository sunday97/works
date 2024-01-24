import styles from "./Mypage-ProfileChange.module.css";
import man1 from "../../assets/남자1.jpg";
import { useEffect } from "react";

function MyProfile() {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      console.log(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행됨을 의미

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>프로필 변경</h2>
      <div className={styles.contents}>
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
            주소변경이 들어갈 장소이다. 처음 렌더링될 때 기존의 주소값을 가지고
            시작하자.
          </div>
          <div className={styles.profileChangBtn}>프로필 변경하기</div>
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
          <div className={styles.profileChangBtn}>프로필 변경하기</div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
