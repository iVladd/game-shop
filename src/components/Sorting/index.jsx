import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../features/filters/filtersSlice";
import styles from "./sorting.module.scss";

const sortList = [
  { name: "более популярным", sortProperty: "rating" },
  { name: "менее популярным", sortProperty: "-rating" },
  { name: "дороже", sortProperty: "price" },
  { name: "дешевле", sortProperty: "-price" },
  { name: "названию (z...a)", sortProperty: "title" },
  { name: "названию (a...z)", sortProperty: "-title" },
];

const Sorting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSort = useSelector((state) => state.filters.sort);
  const dispatch = useDispatch();

  const handleSortClick = (item) => {
    dispatch(setSort(item));
    setIsOpen(false);
  };

  return (
    <div className={styles.sort}>
      <p className={styles.sortingText}>Сортировка по:</p>{" "}
      <button
        className={styles.sortingButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {activeSort.name}
      </button>
      {isOpen && (
        <div className={styles.sortPopup}>
          <ul className={styles.sortPopupList}>
            {sortList.map((sort, i) => (
              <li
                className={`${styles.sortPopupItem} ${
                  activeSort.name === sort.name ? styles.active : ""
                }`}
                key={i}
                onClick={() => handleSortClick(sort)}
                // className={sortOption.sortProperty === sort.sortProperty ? "active" : ""}
              >
                {sort.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sorting;
