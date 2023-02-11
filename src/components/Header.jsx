import React from "react";
import CartButton from "./CartButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import styles from "../scss/components/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <SearchBar />
      <CartButton />
    </div>
  );
};

export default Header;
