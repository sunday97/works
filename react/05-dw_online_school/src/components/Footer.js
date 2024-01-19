import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";
import styles from "./Footer.module.css";

import Container from "./Container";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <ul className={styles.Links}>
          <li>DWOS 소개</li>
          <li>개인정보취급방침</li>
          <li>사용자 이용약관</li>
          <li>자주묻는 질문</li>
        </ul>
        <ul className={styles.info}>
          <li>(주)DWOS</li>
          <li>대표 | 김흑룡</li>
          <li>개인정보보호책임자 | 김청룡</li>
          <li>대표 번호 | 080-****-****</li>
          <li>사업자번호 | ***-**-****</li>
          <li>통신판매업 | 제****-대전**-****호</li>
          <li>주소 | 대전광역시 중구 중앙로121번길 20</li>
        </ul>
        <div className={styles.icons}></div>
        <div className={styles.logo}>
          <span>DW</span>OS
        </div>
        <div className={styles.sns}>
          <img src={facebookIcon} alt="facebook" />
          <img src={twitterIcon} alt="twitter" />
          <img src={instagramIcon} alt="twitter" />
        </div>
      </Container>
    </div>
  );
}

export default Footer;