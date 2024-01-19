// import MapComponent from "./component/MapComponent"

import styles from "./BuddyFind.module.css";
import Container from "../components/Container";
// import beneImg from "./beneImg.png"
import MapComponent from "./../components/MapComponent";
import BuddyFindMap from "../components/BuddyFind-components/BuddyFindMap";
import BuddyFindSet from "../components/BuddyFind-components/BuddyFindSet";
import { Link, Outlet } from "react-router-dom";

function BuddyFind() {
  const selectBtn = `${styles.btn}     ${styles.select}`;
  return (
    <>
      {/* 1번째 div */}
      <div className={styles.bene}>
        {/* <img src={beneImg} /> */}
        <h2 className={styles.title}>버디 찾기</h2>
        <p className={styles.text}>함께 운동할 버디를 찾아보세요!</p>
      </div>

      {/* 2번째 div */}
      <Container>
        <div className={styles.btnContainer}>
          <Link to={"/buddyfind"}>
            <button className={selectBtn}>버디찾기</button>
          </Link>
          <Link to={"buddyMy"}>
            <button className={styles.btn}>나의 설정</button>
          </Link>
        </div>
        <Outlet />
      </Container>
    </>
  );
}

export default BuddyFind;
