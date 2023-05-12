import React from "react";
import { useSelector } from "react-redux";
import styles from "./orderbutton.module.scss";

const OrderButton = ({ onClick, game }) => {
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === game.id)
  );
  const addedCount = cartItem ? cartItem.count : 0;

  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button className={styles.gameOrderBtn} onClick={(e) => handleClick(e)}>
      Додати до кошику{" "}
      {addedCount > 0 && (
        <span className={styles.gameOrderCount}>{addedCount}</span>
      )}
    </button>
  );
};

export default OrderButton;
