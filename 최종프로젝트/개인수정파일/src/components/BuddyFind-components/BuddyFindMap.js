import styles from "./BuddyFindMap.module.css";
import MapComponent from "../MapComponent";

function BuddyFindMap() {
  return (
    <>
      <div className={styles.mapNav}>
        <div className={styles.buddy}>
          <span className={styles.text}>버디 켜기</span>
          <div className={styles.toggle}>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <div className={styles.boxContainer}>
          <div className={styles.boxbtn}>
            <div class={styles.box}>
              <div>종목</div>
              <input />
            </div>
            <div class={styles.box}>
              <div>시간</div>
              <input />
            </div>
            <div class={styles.box}>
              <div>장소</div>
              <input />
            </div>
          </div>
          <button className={styles.buddyBtn}>버디찾기</button>
        </div>
        <MapComponent />
      </div>
    </>
  );
}

export default BuddyFindMap;
