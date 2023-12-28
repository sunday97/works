import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello, react(App Component)</h1>
      <ul>
        {/* <a>를 사용하면 새로운 페이지를 로딩하기에 react에선 잘 사용하지 않는다. */}
        {/* 그러나  <Link>는 주소줄과 화면만 바꿔주고 새로 로딩되는 것은 안디ㅏ.*/}
        <Link to="01">
          <li>1. Styled Components Basic</li>
        </Link>
        <Link to="02">
          <li>2. Nesting 문법</li>
        </Link>
        <Link to="03">
          <li>3. Practice1</li>
        </Link>
        <Link to="04">
          <li>4. Practice2</li>
        </Link>
        <Link to="05">
          <li>5. 다이나믹 스타일링</li>
        </Link>
        <Link to="06">
          <li>6. Practice3</li>
        </Link>
        <Link to="07">
          <li>7. 스타일 재상용 : 상속</li>
        </Link>
        <Link to="08">
          <li>8. 스타일 재상용 : css함수</li>
        </Link>
        <Link to="09">
          <li>9. Practice4</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
