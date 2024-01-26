import styles from "./Mypage-Delivery.module.css";
import pic from "../../assets/닭가슴살.png";
import { useRef } from "react";

function Delivery({ changeRef, OrderRef }) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <h2 className={styles.title} ref={changeRef}>
          조회 및 환불
        </h2>
        <ul className={`${styles.content} ${styles.content1}`}>
          <li className={styles.item}>
            <div className={styles.titles}>
              <h3 className={styles.titlesTitle}>24.10.13</h3>
              <p className={styles.titlesPrice}>주문배송상태표기란</p>
            </div>
            <div className={styles.summary}>
              <ul className={styles.goodss}>
                <li className={styles.goods}>
                  <div className={styles.imgWraper}>
                    <img src={pic} alt="상품사진" />
                  </div>
                  <div className={styles.goodsTitles}>
                    <h4 className={styles.goodsTitle}>제품명1</h4>
                    <p className={styles.goodsPrice}>30,000원</p>
                  </div>
                </li>
                <li className={styles.goods}>
                  <div className={styles.imgWraper}>
                    <img src={pic} alt="상품사진" />
                  </div>
                  <div className={styles.goodsTitles}>
                    <h4 className={styles.goodsTitle}>제품명2</h4>
                    <p className={styles.goodsPrice}>50,000원</p>
                  </div>
                </li>
              </ul>
              <div className={styles.exchangeBtn}>교환/반품하기</div>
            </div>
          </li>
        </ul>
        <h2 className={styles.title} ref={OrderRef}>
          주문내역
        </h2>
        <div className={`${styles.content} ${styles.content2}`}>
          <div className={styles.orderDetailsClassification}>
            <p className={styles.orderDetailsClassificationDate}>주문일자</p>
            <p className={styles.orderDetailsClassificationName}>제품</p>
            <p className={styles.orderDetailsClassificationPrice}>가격</p>
          </div>
          <ul className={styles.orderDetails}>
            <li className={styles.orderDetail}>
              <p className={styles.orderDetailDate}>2024-xx-xx</p>
              <p className={styles.orderDetailName}>맨들닭가슴살</p>
              <p className={styles.orderDetailPrice}>30,000원</p>
            </li>
            <li className={styles.orderDetail}>
              <p className={styles.orderDetailDate}>2024-xx-xx</p>
              <p className={styles.orderDetailName}>맨들닭가슴살</p>
              <p className={styles.orderDetailPrice}>30,000원</p>
            </li>
            <li className={styles.orderDetail}>
              <p className={styles.orderDetailDate}>2024-xx-xx</p>
              <p className={styles.orderDetailName}>맨들닭가슴살</p>
              <p className={styles.orderDetailPrice}>30,000원</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
