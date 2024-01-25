import styled from "styled-components";
import Container from "../components/Container";
import styles from "./MyPage.module.css";
import myPageBannerImg from "../assets/마이페이지(배너).png";
import userIcon from "../assets/user-solid.svg";
import deliveryIcon from "../assets/cart-shopping-solid.svg";
import desktopIcon from "../assets/desktop-solid.svg";
import MyProfile from "./../components/Mypage-components/Mypage-ProfileChange";
import { useState } from "react";
import Delivery from "../components/Mypage-components/Mypage-Delivery";
import Inquiry from "../components/Mypage-components/Mypage-inquiry";

function MyPage() {
  const [pageShift, setPageShift] = useState(1);
  console.log(pageShift);

  const ImgWraper = styled.div`
    display: flax;
    justify-content: center;
    align-items: center;
  `;
  const MyPageContainer = styled(Container)`
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  `;

  let content;

  switch (pageShift) {
    case 1:
      content = <MyProfile />;
      break;
    case 2:
      content = <Delivery />;
      break;
    case 3:
      content = <Inquiry />;
      break;

    default:
      content = null;
  }

  const handleProfile = (page, num) => (e) => {
    e.stopPropagation();
    window.scrollTo({ top: num, behavior: "smooth" });
    setPageShift(page);
  };

  return (
    <>
      <div className={styles.banner}>
        <ImgWraper>
          <img src={myPageBannerImg} />
        </ImgWraper>
      </div>
      <MyPageContainer>
        <div className={styles.menus}>
          {/* 내정보 */}
          <div className={styles.menu} onClick={handleProfile(1, 0)}>
            <div className={styles.menuTitle}>
              <div className={styles.iconWraper}>
                {/* <img src={userIcon} alt="userIcon" /> */}
                <img src={userIcon} alt="userIcon" />
              </div>
              내정보
            </div>
            <div className={styles.locationBtn} onClick={handleProfile(1, 400)}>
              프로필 수정
            </div>
            <div
              className={styles.locationBtn}
              onClick={handleProfile(1, 1466)}
            >
              비밀번호 변경
            </div>
          </div>
          {/* 배송 */}
          <div className={styles.menu}>
            <div className={styles.menuTitle} onClick={handleProfile(2, 0)}>
              <div className={styles.iconWraper}>
                {/* <img src={userIcon} alt="userIcon" /> */}
                <img src={deliveryIcon} alt="deliveryIcon" />
              </div>
              배송
            </div>
            <div className={styles.locationBtn} onClick={handleProfile(2, 400)}>
              조회/환불
            </div>
            <div className={styles.locationBtn}>주문내역</div>
          </div>
          {/* 고객센터 */}
          <div className={styles.menu}>
            <div className={styles.menuTitle} onClick={handleProfile(3, 0)}>
              <div className={styles.iconWraper}>
                {/* <img src={userIcon} alt="userIcon" /> */}
                <img src={desktopIcon} alt="userIcon" />
              </div>
              고객센터
            </div>
            <div className={styles.locationBtn} onClick={handleProfile(3, 400)}>
              1:1 문의하기
            </div>
          </div>
        </div>
        {/* 컨텐츠 */}
        {content}
      </MyPageContainer>
    </>
  );
}

export default MyPage;
