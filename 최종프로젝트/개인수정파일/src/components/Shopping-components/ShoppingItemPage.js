import { useLocation } from "react-router-dom";
import ShoppingBanner from "./ShoppingBanner";
import styles from "./ShoppingItemPage.module.css";
import plusIcon from "../../assets/plus-solid.svg";
import minusIcon from "../../assets/minus-solid.svg";
import { useState } from "react";
import ShowStar from "./ShowStar";

const delivery = 3000;
const discount = 2000;
function ShoppingItemPage() {
  const props = useLocation();
  const { state: item } = props;
  const [number, setNumber] = useState(1);

  return (
    <>
      <ShoppingBanner />
      <div className={styles.container}>
        {/* 헤더부분 */}
        <div className={styles.headBox}>
          {/* 이미지 */}
          <div className={styles.headBoxItem}>
            <img src={item.image} />
          </div>
          {/* 갯수 및 품절 */}
          <div className={`${styles.headBoxItem} ${styles.headBoxItemMiddle}`}>
            <p className={styles.itemTitle}>{item.name}</p>
            <ShowStar num={item.rating} />
            <div className={styles.line}></div>
            <div className={styles.isStock}>
              재고여부 : {item.inStock ? "구매가능" : "품절"}
            </div>
            {item.inStock ? (
              <div className={styles.howMany}>
                <div className={styles.iconWrap}>
                  <img
                    src={plusIcon}
                    alt="plusIcon"
                    onClick={() => {
                      setNumber((prev) => prev + 1);
                    }}
                  />
                </div>
                <div className={styles.number}>{number}</div>
                <div className={styles.iconWrap}>
                  <img
                    src={minusIcon}
                    alt="plusIcon"
                    onClick={() => {
                      if (number > 1) {
                        setNumber((prev) => prev - 1);
                      }
                    }}
                  />
                </div>
              </div>
            ) : (
              <div style={{ fontSize: "32px", color: "var(--text-color)" }}>
                <img src={minusIcon} width={36} height={36} />
              </div>
            )}
          </div>
          {/* 액수 및 장바구니 버튼 */}
          <div className={styles.headBoxItem}>
            {item.inStock ? (
              <>
                <div className={styles.priceBoxItem}>
                  <div>상품금액</div>
                  <div>{item.price.toLocaleString()} 원</div>
                </div>
                <div className={styles.priceBoxItem}>
                  <div>할인금액</div>
                  <div>{discount.toLocaleString()} 원</div>
                </div>
                <div className={styles.priceBoxItem}>
                  <div>배송비</div>
                  <div> {delivery.toLocaleString()} 원</div>
                </div>
                <div className={`${styles.priceBoxItem} ${styles.total}`}>
                  <div>합계</div>
                  <div> {item.price * number - discount + delivery} 원</div>
                </div>
                <div className={styles.basket}>장바구니</div>
              </>
            ) : (
              <div className={styles.soldOut}>
                <p>죄송합니다.</p>
                <p>상품을 준비 중입니다.</p>
                <p>조금만 기다려주세요.</p>
              </div>
            )}
          </div>
          {/* 자세히보기 */}
        </div>
        <div className={styles.details}>
          <p className={styles.detailsHead}>상세정보</p>
          <img src={item.details.image} alt="상세사진" />
          <p className={styles.introduction}>{item.details.introduction}</p>
        </div>
        {/* 추천상품 */}
        <div className={`${styles.details} ${styles.recommendedItems}`}>
          <p className={styles.detailsHead}>추천상품</p>
        </div>
        {/* 상품후기 */}
        <div className={`${styles.details} ${styles.reviews}`}>
          <p className={styles.detailsHead}>후기</p>
          <ul className={styles.reviews}>
            <li className={styles.review}>
              <p>{item.reviews[0].userName}</p>
              <div className={styles.revierwName}>
                <ShowStar num={item.reviews[0].rating} />
                <p>작성일</p>
              </div>
              <p>{item.reviews[0].review}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ShoppingItemPage;
