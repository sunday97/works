import styles from "./Mypage-Delivery.module.css";
import pic from "../../assets/닭가슴살.png";

function Delivery() {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <h2 className={styles.title}>조회 및 환불</h2>
        <ul className={`${styles.content} ${styles.content1}`}>
          <li className={styles.item}>
            <div className={styles.titles}>
              <h3>24.10.13</h3>
              <p>주문배송상태표기란</p>
            </div>
            <div className={styles.summary}>
              <ul className={styles.goodss}>
                <li className={styles.goods}>
                  <div className={styles.imgWraper}>
                    <img src={pic} alt="상품사진" />
                  </div>
                  <div className={styles.goodsTitles}>
                    <h4>제품명</h4>
                    <p>30,000원</p>
                  </div>
                </li>
              </ul>
              <div className={styles.exchangeBtn}>교환/반품하기</div>
            </div>
          </li>
        </ul>
        <h2 className={styles.title}>주문내역</h2>
        <div className={`${styles.content} ${styles.content2}`}></div>
      </div>
    </div>
  );
}

export default Delivery;
