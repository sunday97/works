import { useEffect, useState } from "react";
import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation(); //버블링 막기
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="user menu" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li>위시리스트</li>
          <li className={styles.disabled}>회원가입</li>
          <li>로그인</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
