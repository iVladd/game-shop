import React from "react";
import styles from "./cartbutton.module.scss";
import { BsCart3 } from "react-icons/bs";

const CartButton = () => {
  return (
    <button className={styles.cartButton}>
      <span className={styles.moneySum}>0 ₴</span>
      <div className={styles.gamesSum}>
        <BsCart3 />
        <span className={styles.gamesSumText}>0</span>
      </div>
    </button>
  );
};

export default CartButton;
