import React from "react";
import styles from "./orderbutton.module.scss";

const OrderButton = ({ onClick, orderCounts }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button className={styles.gameOrderBtn} onClick={(e) => handleClick(e)}>
      Добавить в корзину{" "}
      {orderCounts > 0 && (
        <span className={styles.gameOrderCount}>{orderCounts}</span>
      )}
    </button>
  );
};

export default OrderButton;
