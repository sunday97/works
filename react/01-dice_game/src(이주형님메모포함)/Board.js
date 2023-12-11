import Dice from "./Dice";
import "./Board.css";

function Board({ name, color, gameHistory }) {
  // const { name, color } = props;

  // 1. 총점 만들기
  // let sum = 0;
  // for (let i = 0; i < gameHistory.length; i++) {
  //   sum += gameHistory[i];
  // }

  // 2. 총점 만들기
  // let sum = 0;
  // gameHistory.forEach((value) => {
  //   sum += value;
  // });

  // 3. 총점 만들기
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  // function( a, b ){
  //   return a + b;
  // }

  // gameHistory ex) 5개 (0~4)
  // ((a, b) => a + b, 0);
  // =>
  // a : 0, b:[0]
  // a : 0+[0], b:[1]
  // a : 0+[0]+[1], b:[2]

  // gameHistory[마지막 인덱스];
  // 배열에 길이에서 -1
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
