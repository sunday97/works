import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "./Container";
import logo from "../assets/LOGO.svg";
import basket from "../assets/basket.svg";
import mail from "../assets/letter.svg";
import user from "../assets/user.svg";
import Img from "./Img";
import { useEffect, useState } from "react";

function Header() {
  // 이름만 가지고 온다.
  const [memberData, setMemberData] = useState("");
  // 이미지 클릭시 로그아웃과 마이페이지 볼 수 있게 만듬 사라지게 만듬
  // console.log(memberData);
  const [imgClick, setImgClick] = useState(false);

  const onClick = (event) => {
    event.stopPropagation();
    setImgClick(true);
    // setReImgClick(false);
  };
  const [forceRender, setForceRender] = useState(false);
  useEffect(() => {
    // 로컬 스토리지에서 값을 가져오는 함수
    const getLocalStorageValue = (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    };

    // 예시: Member 키에 저장된 값을 가져오기
    const member = getLocalStorageValue("Member");
    // console.log(member); ok
    // setForceRender((prev) => !prev);
    if (member) {
      const userName = member[0]?.MEM_NAME;
      setMemberData(userName);
      // console.log(userName);
    } else {
      setMemberData(""); // member 배열이 비어있는 경우 memberData를 빈 문자열로 설정
    }
  }, [forceRender]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // event.preventDefault();
      // 모달 외부를 클릭하면 모달을 닫음
      if (imgClick) {
        setImgClick(!imgClick);
      }
    };

    // 이벤트 리스너 추가
    document.addEventListener("click", handleOutsideClick);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [imgClick]);
  return (
    <>
      {/* Nav 시작 */}
      <Container className={styles.nav}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img className={styles.logoImg} src={logo} alt="logo" />
          </Link>
        </div>
        <ul className={styles.ul}>
          {memberData ? (
            <Link to={"BuddyFind"}>
              <li>버디찾기</li>
            </Link>
          ) : (
            <Link to={"/Login"}>
              <li>버디찾기</li>
            </Link>
          )}
          {memberData ? (
            <Link to={"chatting"}>
              <li>채팅</li>
            </Link>
          ) : (
            <Link to={"/Login"}>
              <li>채팅</li>
            </Link>
          )}

          <Link to={"intro"}>
            <li>소개</li>
          </Link>

          {memberData ? (
            <Link to={"shopping"}>
              <li>쇼핑</li>
            </Link>
          ) : (
            <Link to={"/Login"}>
              <li>쇼핑</li>
            </Link>
          )}
          {memberData ? (
            <Link to={"board"}>
              <li>게시판</li>
            </Link>
          ) : (
            <Link to={"/Login"}>
              <li>게시판</li>
            </Link>
          )}
        </ul>
        <div className={styles.iconWrap}>
          <Img className={styles.iconCircle}>
            <img src={basket} alt="basket" />
          </Img>
          <Img className={styles.iconCircle}>
            <img src={mail} alt="mail" />
          </Img>
          {/* <div onClick={onClick}> */}
          {memberData ? (
            <Img
              onClick={onClick}
              className={`${styles.iconCircle} ${styles.login}`}
            >
              <img src={user} alt="user" />
              {memberData && imgClick ? (
                <div className={styles.logBox}>
                  <p className={styles.userName}>
                    {memberData} <span>님</span>
                  </p>
                  <Link to={"/mypage"}>
                    <div
                      className={styles.btn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgClick(false);
                      }}
                    >
                      마이페이지
                    </div>
                  </Link>
                  <div className={styles.btn}>로그아웃</div>
                </div>
              ) : (
                ""
              )}
            </Img>
          ) : (
            <Link to={"Login"}>
              <Img className={styles.iconCircle}>
                <img src={user} alt="user" />
              </Img>
            </Link>
          )}

          {/* </div> */}
        </div>
      </Container>
      {/* Nav 끝 */}
    </>
  );
}

export default Header;
