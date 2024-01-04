import styles from "./Button.module.css";
import classNames from "classnames";

function Button({ className, variant, isDiv, ...restprops }) {
  //   console.log(restprops);
  //   console.log(styles["round"]);
  // console.log(styles[variant]);
  //객체의 키값을 동적으로 사용하기

  //   react에서는 div, button을 <~/> 자기종결로 쓸 수도 있다.
  //   return <button children="버튼" className={classNames(styles.button)} />;

  //   div 조건부 수식
  if (isDiv === "div") {
    return (
      <div
        {...restprops}
        className={classNames(
          styles.button,
          variant && styles[variant],
          className
        )}
      />
    );
  }

  return (
    <button
      {...restprops}
      className={classNames(
        styles.button,
        variant && styles[variant],
        className
      )}
    />
  );
}

export default Button;
