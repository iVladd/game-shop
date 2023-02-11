import React from "react";
import styles from "./category.module.scss";

const Category = ({ name, active, onClick }) => {
  return (
    <button
      className={`${styles.categoryBtn} ${active && styles.active}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Category;
