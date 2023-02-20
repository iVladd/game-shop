import React, { useEffect, useState } from "react";
import styles from "./pagination.module.scss";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  topMargin = 80,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Array.from({ length: pagesCount }, (_, i) => i + 1));
    onPageChange(1);
  }, [pagesCount, onPageChange]);

  if (items.length > 10) {
    const newItems = [...items].splice(0, 8);
    newItems.push("...", items.length);
    setItems(newItems);
  }

  if (items.length <= 1) {
    return null;
  }

  return (
    <div
      className={styles.paginationContainer}
      style={{ marginTop: topMargin }}
    >
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
