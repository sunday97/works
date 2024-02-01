import shoppingBannerImg from "../../assets/쇼핑(배너).svg";
import styles from "./ShoppingBanner.module.css";

function ShoppingBanner() {
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
    </>
  );
}

export default ShoppingBanner;
