import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import styles from "./App.module.css";
import Footer from "./Footer";
import "./App.font.css";
import { useMember } from "../contexts/MemberContext";

function App() {
  // console.log(styles);  // 객체로 나옴
  // console.log("App 로딩");
  const member = useMember();
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
