import { useLocation } from "react-router-dom";
import ShoppingBanner from "./ShoppingBanner";
import styles from "./ShoppingItemPage.module.css";

function ShoppingItemPage() {
  const props = useLocation();
  console.log(props);
  return (
    <>
      <ShoppingBanner />
      <div className={styles.container}>
        <div></div>
      </div>
    </>
  );
}

export default ShoppingItemPage;
