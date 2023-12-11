import Dice from "./Dice.js";
import "./Board.css";

function Board({ name, color, num, GameHistory }) {
  // const DICE_IMAGES = {
  //   red: diceRed01,
  //   blue: diceBlue01,
  // };
  return (
    // App-board는 App.css에 있다. 이렇게도 가능함.
    <div className="Board  App-board">
      <h2 className="Board-heading">{name}</h2>
      {/* <img src={DICE_IMAGES.color} alt="파랑 주사위 1" />  에선 .color가 변수 DICE_IMAGES 안에 있는 키값으로 인식해서 안됨 */}
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>0</p>
      <h2>기록</h2>
      <p>{GameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
