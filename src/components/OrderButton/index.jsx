import React, { useState } from "react";
import styles from "./orderbutton.module.scss";

const OrderButton = () => {
  const [orderCount, setOrderCount] = useState(0);

  const handleClick = (e) => {
    e.stopPropagation();
    setOrderCount((prev) => prev + 1);
  };

  return (
    <button className={styles.gameOrderBtn} onClick={(e) => handleClick(e)}>
      Добавить в корзину{" "}
      {orderCount > 0 && (
        <span className={styles.gameOrderCount}>{orderCount}</span>
      )}
    </button>
  );
};

export default OrderButton;
