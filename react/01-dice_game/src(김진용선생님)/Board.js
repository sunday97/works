import Dice from "./Dice";
import "./Board.css";

function Board({ name, color, gameHistory }) {
  // let sum = 0;
  // for (let i = 0; i < gameHistory.length; i++) {
  //   sum += gameHistory[i];
  // }
  // gameHistory.forEach((v) => {
  //   sum += v;
  // });
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  // function(a, b){
  //   return a + b;
  // }

  const num = gameHistory[gameHistory.length - 1];
  return (
    <div className="Board App-board">
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
