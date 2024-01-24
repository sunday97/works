import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "./Container";
import logo from "../assets/LOGO.svg";
import basket from "../assets/basket.svg";
import mail from "../assets/letter.svg";
import user from "../assets/user.svg";
import Img from "./Img";

function Header() {
  return (
    <>
      {/* Nav 시작 */}
      <Container className={styles.nav}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img className={styles.img} src={logo} />
          </Link>
        </div>
        <ul className={styles.ul}>
          <Link to={"BuddyFind"}>
            <li>버디찾기</li>
          </Link>
          <Link to={"chatting"}>
            <li>채팅</li>
          </Link>
          <Link to={"intro"}>
            <li>소개</li>
          </Link>
          <Link to={"shopping"}>
            <li>쇼핑</li>
          </Link>
          <Link to={"board"}>
            <li>게시판</li>
          </Link>
        </ul>
        <div className={styles.iconWrap}>
          <Img className={styles.iconCircle}>
            <img src={basket} className={styles.iconSize} />
          </Img>
          <Img className={styles.iconCircle}>
            <img src={mail} />
          </Img>
          <Link to={"Login"}>
            <Img className={styles.iconCircle}>
              <img src={user} />
            </Img>
          </Link>
        </div>
      </Container>
      {/* Nav 끝 */}
    </>
  );
}

export default Header;
