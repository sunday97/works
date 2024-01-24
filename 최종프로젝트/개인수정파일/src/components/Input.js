import styles from "./Input.module.css";

function Input({ placeholder, label = "제목" }) {
  return (
    <>
      <div>
        <label>{label}</label>
      </div>
      <input placeholder={placeholder} />
    </>
  );
}

export default Input;
