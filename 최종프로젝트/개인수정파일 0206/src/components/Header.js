import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "./Container";
import logo from "../assets/LOGO.svg";
import basket from "../assets/basket.svg";
import mail from "../assets/letter.svg";
import user from "../assets/user.svg";
import Img from "./Img";
import { useContext, useEffect, useState } from "react";
import { BuddizContext } from "../contexts/buddizContexts";
import HeaderMg from "./HeaderMg";
import HeaderUser from "./HeaderUser";

function Header() {
  const [memberData, setMemberData] = useState("");
  const [imgClick, setImgClick] = useState(false);
  const [forceRender1, setForceRender1] = useState(false);
  // 관리자 데이터
  const [managerData, setManagerData] = useState("");
  const onClick = (event) => {
    event.stopPropagation();
    setImgClick(true);
    // setReImgClick(false);
  };
  // console.log(memberData);
  const temper = useContext(BuddizContext);
  const { headIconLeder } = temper;
  console.log(headIconLeder);
  useEffect(() => {
    console.log(headIconLeder);
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

    // 관리자 
    const getLocalStoryManager = (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null
    }

    const manager = getLocalStoryManager("Manager");
    console.log(manager);

    if (manager) {
      const managerEmail = manager.MG_EMAIL
      setManagerData(managerEmail)
    } else {
      setManagerData("")
    }
  }, [forceRender1, headIconLeder]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // event.preventDefault();
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
    if (memberData || managerData) {
      localStorage.removeItem("Member");
      localStorage.removeItem("Manager")
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
          {memberData || managerData ? (
            <Link to={"BuddyFind"}>
              <li>버디찾기</li>
            </Link>
          ) : (
            <Link to={"/Login"}>
              <li>버디찾기</li>
            </Link>
          )}
          {memberData || managerData ? (
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

          {memberData || managerData ? (
            <Link to={"shopping"}>
              <li>쇼핑</li>
            </Link>
          ) : (
            <Link to={"/Login"}>
              <li>쇼핑</li>
            </Link>
          )}
          {memberData || managerData ? (
            <Link to={"board"}>
              <li>게시판</li>
            </Link>
          ) : (
            <Link to={"/Login"}>
              <li>게시판</li>
            </Link>
          )}
        </ul>
        <p>{headIconLeder}</p>
        <div className={styles.iconWrap}>
          <Img className={styles.iconCircle}>
            <img src={basket} alt="basket" />
          </Img>
          <Img className={styles.iconCircle}>
            <img src={mail} alt="mail" />
          </Img>
          {memberData ? (
            <HeaderUser onClick={onClick} memberData={memberData} imgClick={imgClick} setImgClick={setImgClick} Logout={Logout} />
          ) : managerData ? (
            <HeaderMg onClick={onClick} managerData={managerData} imgClick={imgClick} setImgClick={setImgClick} Logout={Logout} />
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