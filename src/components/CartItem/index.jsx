import React from "react";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../features/cart/cartSlice";
import styles from "./cartitem.module.scss";

const CartItem = ({ game }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItemContainer}>
      <img src={game.imageUrl} alt={game.title} className={styles.gameImage} />
      <span className={styles.gameTitle}>{game.title}</span>
      <div className={styles.orderPanel}>
        <button
          className={`${styles.orderButton} ${styles.orderMinus}`}
          onClick={() => dispatch(minusItem(game))}
        >
          <IoRemoveSharp size={"0.6em"} />
        </button>
        <span className={styles.gameCount}>{game.count}</span>
        <button
          className={`${styles.orderButton} ${styles.orderPlus}`}
          onClick={() => dispatch(addItem(game))}
        >
          <IoAddSharp size={"0.6em"} />
        </button>
      </div>

      <span className={styles.gamePrice}>{game.count * game.price} ₴</span>
      <button
        className={styles.removeGame}
        onClick={() => dispatch(removeItem(game))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
