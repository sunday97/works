import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./shopping.module.css";
import shoppingBannerImg from "../assets/쇼핑(배너).svg";
import { useState } from "react";

function Shopping() {
  const [selectedNavItem, setSelectedNavItem] = useState("");

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.imgWraper}>
          <img src={shoppingBannerImg} alt="쇼핑 배너 이미지" />
        </div>
        <div className={styles.bannerTitles}>
          <h2 className={styles.bannerTitle}>스토어</h2>
          <p className={styles.bannerText}>필요한 제품을 찾아보세요!</p>
        </div>
      </div>
      <div className={styles.container}>
        <ul className={styles.shoppingNav}>
          <li className={styles.navItem}>전체보기</li>
          <li className={styles.navItem}>장비</li>
          <li className={styles.navItem}>의류</li>
          <li className={styles.navItem}>식품</li>
          <li className={styles.navItem}>기타</li>
        </ul>
      </div>
    </>
  );
}

export default Shopping;
