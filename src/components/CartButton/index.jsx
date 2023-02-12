import React from "react";
import styles from "./cartbutton.module.scss";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.cartButton} onClick={() => navigate("./cart")}>
      <span className={styles.moneySum}>0 ₴</span>
      <div className={styles.gamesSum}>
        <BsCart3 />
        <span className={styles.gamesSumText}>0</span>
      </div>
    </button>
  );
};

export default CartButton;
