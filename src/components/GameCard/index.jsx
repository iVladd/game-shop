import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilterByCategory } from "../../features/filters/filtersSlice";
import OrderButton from "../OrderButton";
import styles from "./gamecard.module.scss";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/game/${id}`);
  };

  const handleGenreClick = (e, genre) => {
    e.stopPropagation();
    dispatch(setFilterByCategory(genre));
  };

  return (
    <div className={styles.gameCard} onClick={() => handleCardClick(game.id)}>
      <img className={styles.gameImg} src={game.imageUrl} alt={game.title} />
      <h4 className={styles.gameTitle}>{game.title}</h4>
      <div className={styles.gameGenres}>
        {game.genres.map((genre, i) => (
          <span
            key={i}
            className={styles.gameGenre}
            onClick={(e) => handleGenreClick(e, genre)}
          >
            {genre}
          </span>
        ))}
      </div>
      <div className={styles.gameOrder}>
        <span className={styles.gamePrice}>{game.price} ₴</span>
        <OrderButton />
      </div>
    </div>
  );
};

export default GameCard;
