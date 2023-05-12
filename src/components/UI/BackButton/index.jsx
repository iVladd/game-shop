import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./backbutton.module.scss";

const BackButton = ({
  text = "Повернутися назад",
  navigation = -1,
  additionalClass = "",
}) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.backButton} ${additionalClass}`}
      onClick={() => navigate(navigation)}
    >
      <IoChevronBackOutline size={"1.5em"} />
      {text}
    </button>
  );
};

export default BackButton;
