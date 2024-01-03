import classNames from "classnames";
import styles from "./Card.module.css";

// Container 컴포와 유사함

function Card({ className, children }) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export default Card;
