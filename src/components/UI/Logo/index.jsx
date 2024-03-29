import React from "react";
import styles from "./logo.module.scss";
import logo from "../../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
      <img src={logo} alt="Logo img" className={styles.logoImg} />
      <div className={styles.logoText}>
        <p className={styles.logoTitle}>Game Shop</p>
        <span className={styles.logoSubtitle}>Більше, ніж ігри</span>
      </div>
    </div>
  );
};

export default Logo;
