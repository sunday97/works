import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "./Container";
import logo from "../assets/LOGO.svg";
import basket from "../assets/basket.svg";
import mail from "../assets/letter.svg";
import user from "../assets/user.svg";
import Img from "./Img";
import { useEffect, useState } from "react";

function Header() {
  const [memberData, setMemberData] = useState("");
  const [imgClick, setImgClick] = useState(false);
  const [forceRender1, setForceRender1] = useState(false);
  const onClick = (event) => {
    event.stopPropagation();
    setImgClick(true);
    // setReImgClick(false);
  };
  useEffect(() => {
    const getLocalStorageValue = (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    };

    const member = getLocalStorageValue("Member");

    if (member) {
      const userName = member[0]?.MEM_NAME;
      setMemberData(userName);
    } else {
      setMemberData("");
    }
  }, [forceRender1]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      event.preventDefault();
      if (imgClick) {
        setImgClick(!imgClick);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [imgClick]);

  const navigate = useNavigate();

  const Logout = () => {
    if (memberData) {
      localStorage.removeItem("Member");
      navigate("/");
      setForceRender1((prev) => !prev);
    }
  };

  return (
    <>
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
                  <div onClick={Logout} className={styles.btn}>
                    로그아웃
                  </div>
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
        </div>
      </Container>
    </>
  );
}

export default Header;