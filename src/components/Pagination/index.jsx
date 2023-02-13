import React, { useState } from "react";
import styles from "./pagination.module.scss";

const Pagination = ({ pagesCount, currentPage, onPageChange }) => {
  const [items, setItems] = useState(
    Array.from({ length: pagesCount }, (_, i) => i + 1)
  );

  if (items.length > 10) {
    const newItems = [...items].splice(0, 8);
    newItems.push("...", items.length);
    setItems(newItems);
  }

  if (items.length === 1) {
    return null;
  }

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.backButton}
        onClick={() => onPageChange("back")}
        disabled={currentPage === 1}
      >
        ⬅
      </button>
      {items.map((item, i) => (
        <div
          className={`${styles.paginationItem} ${
            currentPage === item ? styles.active : ""
          }`}
          key={i}
          onClick={() => {
            onPageChange(item);
          }}
        >
          {item}
        </div>
      ))}
      <button
        className={styles.forwardButton}
        onClick={() => onPageChange("forward")}
        disabled={currentPage === items.length}
      >
        ➡
      </button>
    </div>
  );
};

export default Pagination;
