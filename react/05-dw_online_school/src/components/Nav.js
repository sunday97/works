import Container from "./Container";
import UserMenu from "./UserMenu";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

// NavLink에서 isActive를 사용해서 밑줄주기
function getLinkStyle({ isActive }) {
  // console.log(props);
  // 인라인스타일은 {}안에 들어가니 return을 {}로 준것이다.

  return { textDecoration: isActive ? "underline" : undefined };
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <span>DW</span>OS
          </div>
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>

          <li>
            <NavLink to="questions" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>

          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
