import { useLocation } from "react-router-dom";
import ShoppingBanner from "./ShoppingBanner";
import styles from "./ShoppingItemPage.module.css";
import plusIcon from "../../assets/plus-solid.svg";
import minusIcon from "../../assets/minus-solid.svg";
import { useState } from "react";
import ShowStar from "./ShowStar";
import xMark from "../../assets/xmark-solid.svg";

const delivery = 3000;
const discount = 2000;
function ShoppingItemPage() {
  const props = useLocation();
  const { state: item } = props;
  const [number, setNumber] = useState(1);
  const user = JSON.parse(localStorage.getItem("Member"));
  console.log(user);
  const [modalState, setModalState] = useState(false);
  const [reviewWriteContents, setReviewWriteContents] = useState({
    STORE_REVIEW: "",
    STORE_RATING: "",
    STORE_REVIEW_TIME: 0,
    STOER_NICKNAME: "",
  });

  const handleReviewSubmitBtn = () => {
    // addStoreItemReviewData
  };

  return (
    <>
      <ShoppingBanner title={`쇼핑`} summary={`필요한 제품을 찾아보세요!`} />
      <div className={styles.container}>
        {/* 헤더부분 */}
        <div className={styles.headBox}>
          <div className={styles.headBoxItem}>
            <img src={item.STORE_IMAGES[0]} />
          </div>
          {/* 갯수 및 품절 */}
          <div className={`${styles.headBoxItem} ${styles.headBoxItemMiddle}`}>
            <p className={styles.itemTitle}>{item.STORE_NAME}</p>
            <ShowStar num={item.STORE_RATING} />
            <div className={styles.line}></div>
            <div className={styles.isStock}>
              재고여부 : {item.STORE_STOCK ? "구매가능" : "품절"}
            </div>
            {item.STORE_STOCK ? (
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
            {item.STORE_STOCK ? (
              <>
                <div className={styles.priceBoxItem}>
                  <div>상품금액</div>
                  <div>{Number(item.STORE_PRICE).toLocaleString()} 원</div>
                </div>
                <div className={styles.priceBoxItem}>
                  <div>할인금액</div>
                  <div>- {discount.toLocaleString()} 원</div>
                </div>
                <div className={styles.priceBoxItem}>
                  <div>배송비</div>
                  <div> {delivery.toLocaleString()} 원</div>
                </div>
                <div className={`${styles.priceBoxItem} ${styles.total}`}>
                  <div>합계</div>
                  <div>
                    {" "}
                    {(
                      item.STORE_PRICE * number -
                      discount +
                      delivery
                    ).toLocaleString()}{" "}
                    원
                  </div>
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
          {/* 상세정보 */}
        </div>
        <div className={styles.details}>
          <p className={styles.detailsHead}>상세정보</p>

          {item.STORE_IMAGES?.map(
            // 0번째 인덱스 포함 x
            (img, index) => index !== 0 && <img key={index} src={img} />
          )}
          {/* 세부소개글 유무 고민 */}
          {/* <p className={styles.introduction}>{item.details.introduction}</p> */}
        </div>
        {/* 추천상품 */}
        <div className={`${styles.details} ${styles.recommendedItems}`}>
          <p className={styles.detailsHead}>추천상품</p>
        </div>
        {/* 상품후기 */}
        <div className={`${styles.details} ${styles.reviews}`}>
          <p className={styles.detailsHead}>
            후기 ({item.REVIEW ? item.REVIEWS.length : "0"})
            <span
              className={styles.reviewWriteBtn}
              onClick={() => {
                setModalState(true);
              }}
            >
              후기작성
            </span>
          </p>
          <ul className={styles.reviews}>
            {item.REVIEWS
              ? item.REVIEWS.map((el, index) => (
                  <li className={styles.review} key={el.id}>
                    <p style={{ fontSize: "18px", fontWeight: "500" }}>
                      {el.userName}
                    </p>
                    <div className={styles.revierwName}>
                      <ShowStar num={el.rating} />
                      <p>(작성일이 들어갈 곳입니다.)</p>
                    </div>
                    <p>{el.review}</p>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      {modalState ? (
        <div className={styles.reviewWriteModal}>
          <div className={styles.background} />
          <div className={styles.reviewWriteBox}>
            <h4 className={styles.reviewWriteTitle}>리뷰작성하기</h4>
            <p className={styles.reviewWriteName}>
              닉네임 : {user[0].MEM_NAME}
            </p>
            <textarea className={styles.reviewWriteContents} />
            <div className={styles.reviewWriteSubmitBtn}>작성완료</div>
            <img
              className={styles.reviewWriteModalClose}
              src={xMark}
              alt="리뷰모달닫기버튼"
              onClick={() => {
                setModalState(false);
              }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ShoppingItemPage;
