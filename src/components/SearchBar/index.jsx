import React, { useMemo, useState } from "react";
import styles from "./searchbar.module.scss";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setFilterByName } from "../../features/filters/filtersSlice";
import { debounce } from "../../utils/debounce";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const inputValue = useSelector((state) => state.filters.filterByName);
  const dispatch = useDispatch();

  const debouncedDispatch = useMemo(
    () =>
      debounce((e) => {
        dispatch(setFilterByName(e.target.value));
      }, 1000),
    [dispatch]
  );

  const handleChange = (e) => {
    setValue(e.target.value);
    debouncedDispatch(e);
  };

  const handleClearInput = () => {
    dispatch(setFilterByName(""));
    setValue("");
  };

  return (
    <div className={styles.searchbar}>
      <BsSearch style={{ color: "grey" }} />
      <input
        type="text"
        className={styles.searchbarInput}
        placeholder="Пошук гри"
        value={value}
        onChange={handleChange}
      />
      {inputValue.length !== 0 && (
        <button
          className={styles.deleteButton}
          onClick={handleClearInput}
        ></button>
      )}
    </div>
  );
};

export default SearchBar;
