import React from "react";
import styles from "./cartempty.module.scss";
import cartEmptyImg from "../../assets/img/cartEmpty.jpg";
import BackButton from "../UI/BackButton";

const CartEmpty = () => {
  return (
    <div className={styles.cartEmptyContainer}>
      <div className={styles.cartEmptyInfo}>
        <h2 className={styles.cartEmptyTitle}>Корзина пустая ¯\_(ツ)_/¯</h2>
        <img
          className={styles.cartEmptyImage}
          src={cartEmptyImg}
          alt="Empty cart"
        />
        <BackButton text="На главную" navigation={"/"} />
      </div>
    </div>
  );
};

export default CartEmpty;
