import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./backbutton.module.scss";

const BackButton = ({ text = "Вернуться назад", navigation = -1 }) => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(navigation)}>
      <IoChevronBackOutline size={"1.5em"} />
      {text}
    </button>
  );
};

export default BackButton;
