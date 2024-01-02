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
    // isOpen이 false이면 return으로 끊어줘서 리소스 낭비를 방지한다.
    if (!isOpen) return;

    // TEST
    // const handleClickOutside = () => {
    //   alert("event click");
    // };
    const handleClickOutside = () => setIsOpen(false);

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  // []안에 변수가 있을 경우(예시:[isOpen]) useEffect가 재실행되며 addEventListener가 쌓인다. 즉 한번클릭으로 얼럿창이 여럿 열릴 수 있다는 것이다.
  // 그래서 cleanUp 함수가 필요하다.

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
