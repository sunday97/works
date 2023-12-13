import HandIcon from "./HandIcon";
import "./HandButton.css";

function HandButton({ value, onClick }) {
  // onClick에 value를 물리려고 따로 함수를 작성해 아래 <button>에 붙였다.
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button onClick={handleClick} className="HandButton">
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
}

export default HandButton;
