import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../features/cart/cartSlice";
import { setFilterByCategory } from "../../features/filters/filtersSlice";
import GameGenre from "../UI/GameGenre";
import OrderButton from "../UI/OrderButton";
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

  const handleOrderClick = (game) => {
    dispatch(addItem(game));
  };

  return (
    <div className={styles.gameCard} onClick={() => handleCardClick(game.id)}>
      <img className={styles.gameImg} src={game.imageUrl} alt={game.title} />
      <h4 className={styles.gameTitle}>{game.title}</h4>
      <div className={styles.gameGenres}>
        {game.genres.map((genre, i) => (
          <GameGenre key={i} genre={genre} onClick={handleGenreClick} />
        ))}
      </div>
      <div className={styles.gameOrder}>
        <span className={styles.gamePrice}>{game.price} ₴</span>
        <OrderButton onClick={() => handleOrderClick(game)} game={game} />
      </div>
    </div>
  );
};

export default GameCard;
