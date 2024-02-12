import { Link, useLocation } from "react-router-dom";
import ShoppingBanner from "./ShoppingBanner";
import styles from "./ShoppingItemPage.module.css";
import plusIcon from "../../assets/plus-solid.svg";
import minusIcon from "../../assets/minus-solid.svg";
import { useEffect, useState } from "react";
import ShowStar from "./ShowStar";
import xMark from "../../assets/xmark-solid.svg";
import { addStoreItemReviewData, getStoreItemData } from "../../api/firebase";

const delivery = 3000;
const discount = 2000;
let num = 0;

function ShoppingItemPage() {
  const props = useLocation();
  const { state } = props;
  console.log(state);
  const [number, setNumber] = useState(1);
  const [item, setItem] = useState({});
  const user = JSON.parse(localStorage.getItem("Member"));
  const Manager = JSON.parse(localStorage.getItem("Manager"));
  console.log(Manager);
  // console.log(user[0].MEN_NAME);
  const [modalState, setModalState] = useState(false);
  const time = new Date().getTime();
  const [reviewWriteContents, setReviewWriteContents] = useState({
    STORE_REVIEW: "",
    STORE_RATING: 0,
    STORE_REVIEW_TIME: time,
    MEN_NICKNAME: user[0]?.MEN_NICKNAME,
    MEN: user[0]?.MEN,
  });

  const [reviews, setReviews] = useState(item.STORE_REVIEWS);
  const [thankModal, setThankModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onLoad = async () => {
      const tempItem = await getStoreItemData("Store", state?.STORE_DOCID);
      console.log(tempItem);
      setItem(tempItem);
    };
    onLoad();
  }, [reviews]);

  const handleTextValue = (e) => {
    // console.log(e.target.value);
    setReviewWriteContents((prev) => ({
      ...prev,
      STORE_REVIEW: e.target.value,
    }));
  };
  // console.log(reviewWriteContents);

  // 감사모달조절장치
  useEffect(() => {
    let timeoutId;

    if (thankModal) {
      // showModal이 true이면 3초 후에 모달을 닫음
      timeoutId = setTimeout(() => {
        setThankModal(false);
      }, 1500);
    }

    // cleanup 함수: 컴포넌트가 언마운트되거나 showModal 상태가 변경될 때 실행
    return () => {
      clearTimeout(timeoutId);
    };
  }, [thankModal]);

  // 리뷰작성
  const handleReviewSubmitBtn = () => {
    const upLoadReview = addStoreItemReviewData(
      "Store",
      // state?.STORE_DOCID,
      item.STORE_ID,
      reviewWriteContents,
      item
    );
    setReviews(upLoadReview);
    setModalState(false);
    setReviewWriteContents({
      STORE_REVIEW: "",
      STORE_RATING: 0,
      STORE_REVIEW_TIME: time,
      MEN_NICKNAME: user[0]?.MEN_NICKNAME,
      MEN: user[0]?.MEN,
    });
  };

  // 댓글 시간변환
  function timeChange(stemp) {
    const date = new Date(stemp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 해주고, 두 자리 숫자로 변환
    const day = String(date.getDate()).padStart(2, "0"); // 일자를 두 자리 숫자로 변환
    const formattedDate = `${year}-${month}-${day}`;

    // console.log(formattedDate); // "yyyy-mm-dd" 형식의 날짜 출력
    return formattedDate;
  }
  // 평균별점구하는 함수?
  // function averageStarRating() {
  //   let number = 0;
  //   item.STORE_REVIEWS.map((el) => {
  //     number = number + el.STORE_RATING;
  //   });

  //   return number;
  // }

  item["STORE_REVIEWS"]?.map((el, index, arrey) => {
    index + 1 === arrey.length
      ? (num = (num + el.STORE_RATING) / arrey.length)
      : (num = num + el.STORE_RATING);
  });

  return (
    <>
      <ShoppingBanner title={`쇼핑`} summary={`필요한 제품을 찾아보세요!`} />
      <div className={styles.container}>
        {/* 헤더부분 */}
        <div className={styles.headBox}>
          <div className={styles.headBoxItem}>
            {item.STORE_IMAGES?.map((el, index) => {
              return index === 0 ? <img key={index} src={el} /> : null;
            })}
          </div>
          {/* 갯수 및 품절 */}
          <div className={`${styles.headBoxItem} ${styles.headBoxItemMiddle}`}>
            <p className={styles.itemTitle}>{item?.STORE_NAME}</p>
            <ShowStar num={num} />
            <div className={styles.line}></div>
            <div className={styles.isStock}>
              재고여부 : {item?.STORE_STOCK ? "구매가능" : "품절"}
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
                {Manager ? (
                  <Link to="/shopping/addItem" state={state}>
                    <div className={styles.basket}>수정하기</div>
                  </Link>
                ) : (
                  <div className={styles.basket}>장바구니</div>
                )}
              </>
            ) : (
              <div className={styles.soldOut}>
                <p>죄송합니다.</p>
                <p>상품을 준비 중입니다.</p>
                <p>조금만 기다려주세요.</p>
                {Manager ? (
                  <Link to="/shopping/addItem" state={state}>
                    <div className={styles.basket}>수정하기</div>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
          {/* 상세정보 */}
        </div>
        <div className={styles.details}>
          <p className={styles.detailsHead}>상세정보</p>

          {item.STORE_IMAGES?.map(
            // 0번째 인덱스 포함 x
            (img, index) =>
              index !== 0 && { img } && <img key={index} src={img} />
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
            후기 ({item.STORE_REVIEWS ? item.STORE_REVIEWS.length : "0"})
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
            {item.STORE_REVIEWS
              ? item.STORE_REVIEWS.map((el, index) => (
                  <li className={styles.review} key={el.STORE_REVIEW_TIME}>
                    <div className={styles.MEN_NICKNAME}>
                      <p style={{ fontSize: "18px", fontWeight: "500" }}>
                        {el.MEN_NICKNAME}
                      </p>
                      {el.MEN === user[0].MEN ? (
                        <div className={styles.reviewEditAndDeleteBtn}>
                          <span>수정</span> / <span>삭제</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={styles.revierwName}>
                      <ShowStar num={el.STORE_RATING} />
                      <p>{timeChange(el.STORE_REVIEW_TIME)}</p>
                    </div>
                    <p>{el.STORE_REVIEW}</p>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>

      {/* 후기작성란 */}
      {modalState ? (
        <div className={styles.reviewWriteModal}>
          <div className={styles.background} />
          <div className={styles.reviewWriteBox}>
            <h4 className={styles.reviewWriteTitle}>리뷰작성하기</h4>
            <p className={styles.reviewWriteName}>
              닉네임 : {user[0].MEN_NICKNAME}
            </p>
            <ShowStar
              num={reviewWriteContents.STORE_RATING}
              setNum={setReviewWriteContents}
            />
            <textarea
              placeholder="이곳에 버디의 후기를 작성해주세요 >o<"
              className={styles.reviewWriteContents}
              onChange={handleTextValue}
            />
            <div
              className={styles.reviewWriteSubmitBtn}
              onClick={() => {
                handleReviewSubmitBtn();
                if (reviewWriteContents.STORE_RATING >= 5) {
                  setThankModal(true);
                }
              }}
            >
              작성완료
            </div>
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
      {/* 5점 감사 모달 */}
      {thankModal ? (
        <div className={styles.thanks}>소중한 리뷰 감사합니다!</div>
      ) : (
        ""
      )}
    </>
  );
}

export default ShoppingItemPage;
