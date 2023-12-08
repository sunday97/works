import logo from "./assets/logo.png";
import Board from "./Board.js";
import Button from "./Button.js";
import { useState } from "react"; // state 할 때 필요한 import!!!
import "./App.css";

// 함수형 컴포넌트 : 컴포넌트를 함수형으로 만든 것(변수형으로도 만들수도 있음.)
//      함수형 컴포넌트를 만들때에는 함수명의 "첫 글자는 대문자"여야 한다.
//      함수현 컴포넌트 안에서는 JSX 문법을 만든 리액트 엘리먼트를 리턴해줘야 한다.
const style = {
  backgroundColor: "#333",
  color: "#fff",
};

// JSX 에서는 객체지향 개념이 적용되기 떄문에 calss가 아니라 className으로 적여야 한다.
// for ==> htmlFor, onclick/onblur ==> onClick/onBlur

// userState의 내부 구조...
// let value;  // 리액트 내장함수에서 외부에 존재하는 정의만 된 value값(undefinded)

// function useState(initialValue) {
//   if (value === undefined) {
//     value = initialValue;
//   }

//   const setState = (newValue) => {
//     value = newValue;
//   };

//   return [value, setState];
// }

function App() {
  // function App({name, price}) {
  // function App(props) {
  //   console.log(props);
  //   console.log(props.productName, props.productPrice);
  //   //   const name = props.productName;
  //   //   const price = props.productPrice;
  //   const { name, price } = props;

  // 랜덤넘버 뽑는 곳
  function random(n) {
    // ceil : 올림 함수
    return Math.ceil(Math.random() * n);
  }

  // State
  // 던지기 버튼 누르면 화면에서 주사위 이미지가 바뀌어야 한다. ==> HTML로 작성한다면 주사위 이미지마다 화면을 만들거나
  // 비동기로 요소를 추가, 삭제 하는 코드를 작성해야한다.
  // 리액트에선 화면의 변화는 새로운 랜더링을 말한다.
  // 리액트에서는 State 라는 것을 사용한다. State는 리액트에서 변수같은 것인데 이 State가 바뀔 때마다 리액트가 "알아서 화면을 새로 랜더링" 해준다.
  // useState()를 console.log로 찍어보면 배열이 나오는데
  // useState()은 0번 인덱스가 ()안에 들어가는 놈이고 1번 인덱스가 함수가 들어가는 "배열"을 리턴한다. 그걸 구조분해 할당하면
  // const [myNum, setMyNum] = useState(1);를 예를 들면 [myNum, setMyNum]에서 myNum이란 변수엔 1이 담기고, setMyNum이란 변수는 함수가 담긴다.
  // 그!리!고! 그 담긴 함수는 리액트가 인지할 수 있는(랜더링시키는) 함수다.
  // let otherNum = 1;
  const [myNum, setMyNum] = useState(1); //use- 는 "React hook" 이라고 한다.
  const [otherNum, setOtherNum] = useState(1);
  const [myGameHistory, setMyGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  // spread 문법
  const arr = [10, 20, 30, 40, 50];
  const [one, two, three, ...four] = arr;
  // console.log(one, two, three, four);  // 10, 20, 30, [40,50]

  // spread로 .push 구현하기
  let arr2 = [];
  arr2[0] = arr[0];
  arr2[1] = arr[1];
  arr2[2] = arr[2];
  arr2[3] = arr[3];
  arr2[4] = arr[4];
  arr2.push(6);
  arr2 = [...arr, 60];
  console.log(arr2);

  // 1 [1], 2 [1, 2], 6 [1, 2, 6]

  const handleRollClick = () => {
    // // 주사위 숫자 뽑기
    // // 이 경우 리액트가 숫자변경을 인지하지 못함.
    // // myNum = random(6);
    // // otherNum = random(6);
    // // console.log(myNum, otherNum);
    // // 그래서 useState()의 1번째 인덱스에서 나온 함수를 이용해서 리액트에 인지를 시켜줘야 함!!!
    // setMyNum(random(6));
    // // 랜더링을 시킬 때 함수 전체를(이경우는 컴포넌트 전체 = App()을) 랜더링 하는 것이라 일반적인 방법으론 []에 값을 담을 수 없다. spread 이용!
    // setMyGameHistory([...myGameHistory, myNum]);
    // setOtherNum(random(6));
    // setOtherGameHistory([...otherGameHistory, otherNum]);
    // // 주사위 숫자 뽑아야 한다.
    // const nextMyNum = random(6);
    // setMyNum(nextMyNum);
    // console.log(nextMyNum);
    // console.log(`setMyNum 실행 후 myNum 값 : ${myNum}`);
    // setMyGameHistory([...myGameHistory, myNum]); // gameHistory = [myNum];
    // console.log(`setGameHistory 실행 후 history : ${myGameHistory}`);
    // setOtherNum(random(6));
    // setOtherGameHistory([...otherGameHistory, otherNum]);
    // console.log(myGameHistory);

    // 주사위 숫자 뽑아야 한다.
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyNum(nextMyNum);
    setOtherNum(nextOtherNum);
    setMyGameHistory([...myGameHistory, nextMyNum]); // gameHistory = [myNum];
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    alert("처음으로함수");
  };

  return (
    <div className="App">
      {/* {{}}에서 밖의{}는 JSX에서 javascript를 열겠다는 것이고, 안의{}는 객체를 뜻한다. */}
      {/* 방법 1. <div style={{ backgroundColor: "#333" }}> ==>인라인 방식*/}
      {/* 방법 2. <div style={style}> ==> 변수처리해서 적용하는 방법/방식은 위랑 같음*/}

      {/* 상단 */}
      <div>
        {/* JSX문법에서 HTML안에서 JS 변수를 사용할 때에는 {}안에 넣어서 사용한다. */}
        <img src={logo} alt="주사위게임 로고" className="App-logo" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          {/* onClick={handleRollClick()}가 아닌 이유는 {}의 의미가 그 구간만큼은 자바스크립트라는 것인데 자바스크립트에선 Func()은 그 즉시 실행이잖아... */}
          {/* 근데  Button는 태그가 아닌거 알지? 이건 컴포넌트고 함수를 받는 애는 진짜 버튼태그야. 그러니까 onClick이란 이름으로 속성데이터(props)를 넘겨줬으면 그곳에서 실행해야해. Button.js로 가보자. */}
          <Button onClick={handleRollClick}>던지기</Button>
          <Button onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>

      {/* 하단 */}
      <div className="App-boards">
        {/* 내 주사위 */}
        {/* props : properties(속성)의 약자로 '속성 데이터'를 전달한다. */}
        <Board name="나" color="blue" num={myNum} GameHistory={myGameHistory} />
        {/* 상대 주사위 */}
        <Board
          name="상대"
          color="red"
          num={otherNum}
          GameHistory={otherGameHistory}
        />
      </div>
    </div>
  );
}

export default App;
