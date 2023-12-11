import HandIcon from "./HandIcon";

function HandButton({ value, onClick }) {
  return (
    <button onClick={onClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
