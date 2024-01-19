import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Container from "./Container";
import logo from "../assets/LOGO.svg";
import basket from "../assets/basket.svg";
import mail from "../assets/letter.svg";
import user from "../assets/user.svg";
import Img from "./Img";

function Nav() {
  return (
    <>
      {/* Nav 시작 */}
      <Container className={styles.nav}>
        <div className={styles.logo}>
          <Link to={"/"}><img className={styles.img} src={logo} /></Link>
        </div>
        <ul className={styles.ul}>
          <Link to={"BuddyFind"}><li>버디찾기</li></Link>
          <Link to={"chatting"}><li>채팅</li></Link>
          <Link to={"intro"}><li>소개</li></Link>
          <Link to={"shopping"}><li>쇼핑</li></Link>
          <Link to={"board"}><li>게시판</li></Link>
        </ul>
        <div className={styles.iconWrap}>
          <Img className={styles.iconCircle}>
            <img src={basket} className={styles.iconSize} />
          </Img>
          <Img className={styles.iconCircle}>
            <img src={mail} />
          </Img>
          <Img className={styles.iconTextCircle}>
            <div className={styles.userIconWrap}>
              <img src={user} className={styles.iconSize} />
            </div>
            {/* 여기 이름 많을 때 어떻게 할지 1/12 */}
            <Link to={"Login"}><div className={styles.icon}>로그인</div></Link>
          </Img>
        </div>
      </Container>
      {/* Nav 끝 */}
    </>
  );
}

export default Nav;
