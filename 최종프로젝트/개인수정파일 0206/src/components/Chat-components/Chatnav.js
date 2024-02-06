import Container from "../Container";
import logo from "../../assets/LOGO.svg";
import mail from "../../assets/letter.svg";
import user from "../../assets/user.svg";
import Img from "../Img";
import styles from "../Header.module.css";
import { Link } from "react-router-dom";
function Chatnav() {
  return (
    <Container className={styles.nav}>
      <Link to={"/"}>
        <div>뒤로가기</div>
      </Link>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img className={styles.img} src={logo} />
        </Link>
      </div>

      <div className={styles.iconWrap}>
        <Img className={styles.iconCircle}>
          <img src={mail} />
        </Img>
        <Img className={styles.iconTextCircle}>
          <div className={styles.userIconWrap}>
            <img src={user} className={styles.iconSize} />
          </div>
          {/* 여기 이름 많을 때 어떻게 할지 1/12 */}
          <Link to={"Login"}>
            <div className={styles.icon}>로그인</div>
          </Link>
        </Img>
      </div>
    </Container>
  );
}

export default Chatnav;
