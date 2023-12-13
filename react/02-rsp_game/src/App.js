import resrt from "./assets/ic-reset.svg";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import "./HandIcon.css";
import { generateRandomHand, compareHand } from "./utils";
import { useState } from "react";
import "./App.css";

// 결과를 한글로 변경하는 함수
function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  // useState를 구조분해할당할 것
  const [nextHand, setNextHand] = useState("rock");
  const [otherNextHand, setOtherNextHand] = useState("rock");
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [isWin, setIsWin] = useState(0);

  // 주먹,가위,보 버튼
  const handleButtonClick = (value) => {
    const myValue = value;
    const otherValue = generateRandomHand();
    const comparison = compareHand(myValue, otherValue);
    // console.log(getResult(myValue, otherValue));
    const nextHistory = getResult(myValue, otherValue);
    setIsWin(comparison);
    // alert(`${myValue}, ${otherValue}`); // 경우 1
    setNextHand(myValue);
    setOtherNextHand(otherValue);
    // alert(`${myValue}, ${otherValue}`); // 경우 2

    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);

    // gameHistory.push(nextHistory); 이건 x
    // setGameHistory([nextHistory]);
    setGameHistory([...gameHistory, nextHistory]);

    // 승부확인법1(노가다)
    // if (myValue === "rock") {
    //   if (otherValue === "rock") {
    //     alert("비김");
    //   } else if (otherValue === "scissor") {
    //     alert("이김");
    //   } else if (otherValue === "paper") {
    //     alert("짐");
    //   }
    // } else if (myValue === "scissor") {
    //   if (otherValue === "rock") {
    //     alert("짐");
    //   } else if (otherValue === "scissor") {
    //     alert("비김");
    //   } else if (otherValue === "paper") {
    //     alert("이김");
    //   }
    // } else if (myValue === "paper") {
    //   if (otherValue === "rock") {
    //     alert("이김");
    //   } else if (otherValue === "scissor") {
    //     alert("짐");
    //   } else if (otherValue === "paper") {
    //     alert("비김");
    //   }
    // }
  };

  const handleBetChange = (e) => {
    // 문자열로 나오기에 숫자화 필요
    let num = Number(e.target.value);
    console.log(num);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };
  // alert(`${myValue}, ${otherValue}`); // 경우 3

  // 초기화버튼
  const handleClearClick = () => {
    setNextHand("rock");
    setOtherNextHand("rock");
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(0);
    setIsWin(0);
  };

  return (
    <>
      <div className="App">
        <h1 className="App-heading">가위바위보</h1>
        <img
          src={resrt}
          alt="초기화"
          className="App-reset"
          onClick={handleClearClick}
        />
        <div className="App-scores">
          <div className="Score">
            <div className="Score-num">{score}</div>
            <div className="Score-name">나</div>
          </div>
          <div className="App-versus">:</div>
          <div className="Score">
            <div className="Score-num">{otherScore}</div>
            <div className="Score-name">상대</div>
          </div>
        </div>
        <div className="Box App-box">
          <div className="Box-inner">
            {/* 가위바위보 내는 곳 */}
            <div className="App-hands">
              <div
                className={`Hand ${
                  isWin == 0 ? "" : isWin == 1 ? "winner" : ""
                }`}
              >
                <HandIcon className="Hand-icon" value={nextHand} />
              </div>
              <div className="App-versus">VS</div>
              <div
                className={`Hand ${
                  isWin == 0 ? "" : isWin == 1 ? "" : "winner"
                }`}
              >
                <HandIcon className="Hand-icon" value={otherNextHand} />
              </div>
            </div>
            {/* 배점 */}
            <div className="App-bet">
              <span>배점</span>
              <input
                type="Number"
                min={1}
                max={9}
                value={bet}
                onChange={handleBetChange}
              />
              <span>배</span>
            </div>
            {/* 기록 */}
            <div className="App-history">
              <h2>승부기록</h2>
              <p>{gameHistory.join(", ")}</p>
            </div>
          </div>
        </div>
        {/* 버튼 */}
        <div>
          <HandButton value="rock" onClick={handleButtonClick} />
          <HandButton value="scissor" onClick={handleButtonClick} />
          <HandButton value="paper" onClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
