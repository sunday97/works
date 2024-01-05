import { useEffect, useState } from "react";
import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";
import { Link } from "react-router-dom";
import { useMember } from "../contexts/MemberContext";

function UserMenu() {
  const member = useMember();
  // => memberContext.js의 useContext를 사용해서 그 안의 state를 가져와 마치 UserMenu.js에 있는 스테이트의 변화가 생긴 것 같이 되어 랜더링 된다.
  // 즉, const member = useMember();를 여기에 작성했다는 것은 react에서 memberContext.js의 작성된 state의 변화를 이곳에서 감지할 수 있는 '구독'상태라는 것이다.
  // 그래서 다른 곳에서 useSetContext를 이용하여 state를 변경한다면 그게 작성된 memberContext.js의 state가 변화하고
  // 그 변화가 useMember가 있는 파일에서 마치 그 component안에서 작성된 state가 변화하여 랜더링된것마냥 useMember의 변화를 감지하고 랜더링한다는 것이다.
  // console.log(member);
  const [isOpen, setIsOpen] = useState(false);

  // JSON.parse() => 제이슨화 한 문자열을 본래의 형태로 변환하는 함수
  const isLogined = JSON.parse(localStorage.getItem("member"));
  // console.log(isLogined);
  // key값이 틀리면 null값이 나옴.

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

  const aaa = localStorage.getItem("member");

  console.log(aaa);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="user menu" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          {!aaa ? (
            <Link to="/wishlist">
              <li className={styles.disabled}>위시리스트</li>
            </Link>
          ) : (
            <Link to="/wishlist">
              <li>위시리스트</li>
            </Link>
          )}
          <li className={styles.disabled}>회원가입</li>
          {!isLogined ? (
            <Link to="/login">
              <li>로그인</li>
            </Link>
          ) : (
            <Link to="/logout">
              <li>로그아웃</li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
