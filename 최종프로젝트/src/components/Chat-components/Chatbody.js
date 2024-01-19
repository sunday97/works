import styles from "./Chatbody.module.css";
import Container from "../Container";

function Chatbody() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.setContainer}>
          <div className={styles.setHeader}>
            <button className={styles.btn}>버디관리</button>
            <button className={styles.btn}>채팅</button>
          </div>
          {/* 버디관리 1번째 div */}
          <div className={styles.mapNav}>
            <div className={styles.buddy}>
              <span className={styles.text}>차단</span>
              <div className={styles.toggle}>
                <div className={styles.circle}></div>
              </div>
            </div>
          </div>
          {/* 버디관리 2번째 div */}
          <div className={styles.friends}>
            <div className={styles.friend}>
              <div className={styles.profit}>
                <div className={styles.iconbox}>
                  <img alt="프로필사진" />
                </div>
                <p>홍길동</p>
              </div>
              <p className={styles.black}>차단</p>
            </div>
            <div className={styles.friend}>
              <div className={styles.profit}>
                <div className={styles.iconbox}>
                  <img alt="프로필사진" />
                </div>
                <p>김갑수</p>
              </div>
              <p className={styles.black}>차단</p>
            </div>
            <div className={styles.friend}>
              <div className={styles.profit}>
                <div className={styles.iconbox}>
                  <img alt="프로필사진" />
                </div>
                <p>김을수</p>
              </div>
              <p className={styles.black}>차단</p>
            </div>
          </div>
        </div>
        {/* 버디관리 3번째 div */}
        <div className={styles.chatContainer}>
          <div className={styles.chat}></div>
          <div className={styles.write}></div>
        </div>
      </div>
    </Container>
  );
}

export default Chatbody;
