import resrt from "./assets/ic-reset.svg";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import "./HandIcon.css";

function App() {
  const handleButtonClick = () => {
    alert(`왜 안나옴?`);
    console.log("sadas");
  };

  return (
    <>
      <div>
        <h1>가위바위보</h1>
        <img src={resrt} alt="초기화" />
        <div className="App-scoes">
          <div>
            <div>0</div>
            <div>나</div>
          </div>
          <div>:</div>
          <div>
            <div>0</div>
            <div>상대</div>
          </div>
        </div>
        <div className="Box App-box">
          <div className="Box-inner">
            {/* 가위바위보 내는 곳 */}
            <div>
              <div className="Hand">
                <HandIcon className="Hand-icon" value="rock" />
              </div>
              <div>VS</div>
              <div className="Hand">
                <HandIcon className="Hand-icon" value="scissor" />
              </div>
            </div>
            {/* 배점 */}
            <div>
              <span>배점</span>
              <input type="Number" min={1} max={9} />
              <span>배</span>
            </div>
            {/* 기록 */}
            <div>
              <h2>승부기록</h2>
              <p>승리, 패배</p>
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
