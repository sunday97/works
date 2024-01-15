import styles from "./ColorSurvey.module.css";

function ColorSurvey({ value, onClick }) {
  return (
    <div className={styles.colorSurvey} onClick={onClick}>
      <div className={styles.id}>{value.id}</div>
      <div className={styles.mbti}>{value.mbti}</div>
      <div className={styles.arrow}>
        <img
          className={styles.arrowIcon}
          //   src에 import가 아니라 외부주소로 가능한 이유는 Images폴더가 public에 있어서 가능(index.html이 있는 곳, 외부접근가능(주소줄접근을 말함)),사용지양
          //   import arrowIcon from "../../../public/images/arrow.svg"; 해도 사용불가. src 까지만 제한됨. 애초에 용도가 나뉘어 있음
          // public = 외부접근용, src = 내부용
          src="/images/arrow.svg"
          alt="arrowIcon"
        />
      </div>
      <div
        className={styles.colorChip}
        style={{ backgroundColor: value.colorCode }}
      ></div>
      <div className={styles.ColorCode}>{value.colorCode}</div>
    </div>
  );
}

export default ColorSurvey;
