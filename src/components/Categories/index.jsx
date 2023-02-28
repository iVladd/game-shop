import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterByCategory } from "../../features/filters/filtersSlice";
import Category from "../Category";
import styles from "./categories.module.scss";

const Categories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(["Все жанры"]);
  let games = useSelector((state) => state.games.games[0]);
  const activeCategory = useSelector((state) => state.filters.filterByCategory);

  useEffect(() => {
    games &&
      games.map((game) => setCategories((prev) => [...prev, game.genres]));
  }, [games]);

  const handleClick = (category) => {
    dispatch(setFilterByCategory(category));
  };

  return (
    <div className={styles.categoriesWrapper}>
      {Array.from(new Set(categories.flat())).map((category, index) => (
        <Category
          name={category}
          key={index}
          active={activeCategory === category}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Categories;
