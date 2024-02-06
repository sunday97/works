import styles from "./Mypage-inquiry.module.css";

function Inquiry() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>1:1 문의하기</h2>
        <div className={styles.textShow}>Text Show Area</div>
        <div className={styles.textInput}>Text 작성 영역</div>
      </div>
    </div>
  );
}

export default Inquiry;
