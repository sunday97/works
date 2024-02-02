import { useLocation } from "react-router-dom";
import ShoppingBanner from "./ShoppingBanner";
import styles from "./ShoppingItemPage.module.css";
import plusIcon from "../../assets/plus-solid.svg";
import minusIcon from "../../assets/minus-solid.svg";
import { useState } from "react";

const delivery = 3000;
const discount = 2000;
const starArr = [1, 2, 3, 4, 5];
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
          <div className={styles.headBoxItem}>
            <img src={item.image} />
          </div>
          <div className={styles.headBoxItem}>
            <p className={styles.itemTitle}>{item.name}</p>
            <div className={styles.starPack}>
              {starArr.map((el) => (
                <div
                  key={el}
                  className={
                    el <= Math.floor(item.rating)
                      ? `${styles.star} ${styles.selected}`
                      : `${styles.star}`
                  }
                >
                  ★
                </div>
              ))}
              <div>{item.rating}</div>
            </div>
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
                {" "}
                -{" "}
              </div>
            )}
          </div>
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
        <div className={styles.recommendedItems}></div>
        {/* 상품후기 */}
        <div className={styles.reviews}></div>
      </div>
    </>
  );
}

export default ShoppingItemPage;
