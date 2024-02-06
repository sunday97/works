import styles from './Purchase.module.css'
import { Link } from 'react-router-dom';

function Purchase() {
  
  return (
    <>
      <div className={styles.header}>
        <h1>쇼핑 구매화면</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.font}>
          <p>기구 헬스장비</p>
        </div>
        <div className={styles.main}>
          <div className={styles.image}>
            <img />
            위 이미지 들어갈 곳
          </div>
          <div className={styles.explanation}>
            <div className={styles.detail}>
              <p>제품명</p>
              <p>별점</p>
              <hr />
              <p>재고여부</p>
              <p>구매수량</p>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.detail}>
              <p>총 상품금액</p>
              <p>할인 금액</p>
              <p>배송금</p>
              <p>합계</p>
              <p>장바구니</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h1>제품 상세 설명</h1>
        </div>
          <h1>추천제품</h1>
        <div className={styles.shop}>
          <div className={styles.cover}>
            <img />
            <p>설명 1</p>
            <p>부가설명</p>
          </div>
          <div className={styles.cover}>
            <img /> 
            <p>설명 2</p>
            <p>부가설명</p>
          </div>
          <div className={styles.cover}>
            <img />
            <p>설명 3</p>
            <p>부가설명</p>
          </div>
          <div className={styles.cover}>
            <img />
            <p>설명 4</p>
            <p>부가설명</p>
          </div>
        </div>
        <div className={styles.review}>
          <h1>상품리뷰/후기</h1>
        </div>
        </div>
    </>
  );
}

export default Purchase;