import React from "react";
import styles from "./gamegenre.module.scss";

const GameGenre = ({ genre, onClick = () => {} }) => {
  return (
    <span className={styles.gameGenre} onClick={(e) => onClick(e, genre)}>
      {genre}
    </span>
  );
};

export default GameGenre;
