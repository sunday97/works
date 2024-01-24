import styled from "styled-components";
import Container from "../components/Container";
import styles from "./MyPage.module.css";
import myPageBannerImg from "../assets/마이페이지(배너).png";
import userIcon from "../assets/user-solid.svg";
import deliveryIcon from "../assets/cart-shopping-solid.svg";
import desktopIcon from "../assets/desktop-solid.svg";
import MyProfile from "./../components/Mypage-components/Mypage-ProfileChange";
import { useState } from "react";

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
          <div
            className={styles.menu}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setPageShift(1);
            }}
          >
            <div className={styles.menuTitle}>
              <div className={styles.iconWraper}>
                {/* <img src={userIcon} alt="userIcon" /> */}
                <img src={userIcon} alt="userIcon" />
              </div>
              내정보
            </div>
            <div
              className={styles.locationBtn}
              onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}
            >
              프로필 수정
            </div>
            <div
              className={styles.locationBtn}
              onClick={() => window.scrollTo({ top: 1466, behavior: "smooth" })}
            >
              비밀번호 변경
            </div>
          </div>
          {/* 배송 */}
          <div className={styles.menu}>
            <div
              className={styles.menuTitle}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setPageShift(2);
              }}
            >
              <div className={styles.iconWraper}>
                {/* <img src={userIcon} alt="userIcon" /> */}
                <img src={deliveryIcon} alt="deliveryIcon" />
              </div>
              내정보
            </div>
            <div className={styles.locationBtn}>프로필 수정</div>
            <div className={styles.locationBtn}>비밀번호 변경</div>
          </div>
          {/* 고객센터 */}
          <div className={styles.menu}>
            <div
              className={styles.menuTitle}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setPageShift(3);
              }}
            >
              <div className={styles.iconWraper}>
                {/* <img src={userIcon} alt="userIcon" /> */}
                <img src={desktopIcon} alt="userIcon" />
              </div>
              내정보
            </div>
            <div className={styles.locationBtn}>프로필 수정</div>
            <div className={styles.locationBtn}>비밀번호 변경</div>
          </div>
        </div>
        {/* 컨텐츠 */}
        <MyProfile />
      </MyPageContainer>
    </>
  );
}

export default MyPage;
