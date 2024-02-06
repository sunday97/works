import styles from "./ShowStar.module.css";

const starArr = [1, 2, 3, 4, 5];
function ShowStar({ num }) {
  // console.log(num);
  return (
    <>
      <div className={styles.starPack}>
        {starArr.map((el) => (
          <div
            key={el}
            className={
              el <= Math.floor(num)
                ? `${styles.star} ${styles.selected}`
                : `${styles.star}`
            }
          >
            ★
          </div>
        ))}
        <div>{`${num}`}</div>
      </div>
    </>
  );
}

export default ShowStar;
