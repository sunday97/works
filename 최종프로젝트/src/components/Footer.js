import logo from "../assets/LOGO.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <img src={logo} />
        </div>
        <div>
          <p>대표 : 버디즈</p>
          <p>이용약관</p>
          <p>개인정보 처리방침</p>
        </div>
        <div>copyright@aaaaaaaa</div>
      </div>
    </>
  );
}

export default Footer;
