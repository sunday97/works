import classNames from "classnames";
import styles from "./Img.module.css";

function Img({ className, children }) {
  return <div className={classNames(styles.img, className)}>{children}</div>;
}

export default Img;
