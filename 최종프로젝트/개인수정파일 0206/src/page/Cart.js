import { useEffect, useState } from "react";
import ShoppingBanner from "../components/Shopping-components/ShoppingBanner";
import styles from "./Cart.module.css";
import { getCartItem, getStoreItemDatas } from "../api/firebase";
function Cart() {
  const user = JSON.parse(localStorage.getItem("Member"));

  const [item, setItem] = useState({});
  const [storeItem, setStoreItem] = useState({});

  const onLoad = async () => {
    const arr = await getCartItem("ShoppingCart", user[0].MEM);
    const tempArr = await getStoreItemDatas("Store");
    setItem(arr);
    setStoreItem(tempArr);

    console.log(arr);
    console.log(tempArr);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <ShoppingBanner title={`장바구니`} summary={`자, 결심의 시간이에요!`} />
      <div className={styles.container}>
        <p className={styles.title}>장바구니</p>
        <div className={styles.content}>
          <p className={styles.contentTitle}>상품정보</p>
          <div className={styles.sortBox}>
            <input type="checkbox" style={{ width: "24px", height: "24px" }} />
            <p>상품정보</p>
            <p>수량</p>
            <p>상품</p>
            <p>구매금액</p>
          </div>
          <ul className={styles.cartList}>{}</ul>
        </div>
      </div>
    </>
  );
}

export default Cart;
