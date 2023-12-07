import logo from "./assets/logo.png";
import Board from "./Board.js";

// 함수형 컴포넌트 : 컴포넌트를 함수형으로 만든 것(변수형으로도 만들수도 있음.)
//      함수형 컴포넌트를 만들때에는 함수명의 첫 글자는 대문자여야 한다.
//      함수현 컴포넌트 안에서는 JSX 문법을 만든 리액트 엘리먼트를 리턴해줘야 한다.
function App() {
  // function App({name, price}) {
  // function App(props) {
  //   console.log(props);
  //   console.log(props.productName, props.productPrice);
  //   //   const name = props.productName;
  //   //   const price = props.productPrice;
  //   const { name, price } = props;
  return (
    <div>
      {/* 상단 */}
      <div>
        {/* JSX문법에서 HTML안에서 JS 변수를 사용할 때에는 {}안에 넣어서 사용한다. */}
        <img src={logo} alt="주사위게임 로고" />
        <h1>주사위게임</h1>
        <div>
          <button>던지기</button>
          <button>처음부터</button>
        </div>
      </div>
      {/* 하단 */}
      <div>
        {/* 내 주사위 */}
        <Board name="나" color="blue" />
        {/* 상대 주사위 */}
        <Board name="상대" color="red" />
      </div>
    </div>
  );
}

export default App;
