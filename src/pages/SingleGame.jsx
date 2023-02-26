import React from "react";
import { Dna } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GameGenre from "../components/UI/GameGenre";
import OrderButton from "../components/UI/OrderButton";
import { addItem } from "../features/cart/cartSlice";
import styles from "../scss/components/singlegame.module.scss";

const SingleGame = () => {
  const dispatch = useDispatch();
  const gameId = useParams().id;
  const gamesList = useSelector((state) => state.games.games[0]);
  const game = gamesList && gamesList.find((game) => game.id === gameId);

  const handleOrderClick = (game) => {
    dispatch(addItem(game));
  };

  console.log(game);

  if (!game) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
        className="dna-wrapper"
      >
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <div className={styles.gameContainer}>
      <img src={game.imageUrl} alt={game.title} className={styles.gameImage} />
      <div className={styles.gameInfo}>
        <h2 className={styles.gameTitle}>{game.title}</h2>
        <div className={styles.gameGenres}>
          {game.genres.map((genre, i) => (
            <GameGenre key={i} genre={genre} className={styles.gameGenre} />
          ))}
        </div>
        <div className={styles.gameDescription}>
          <span className={styles.descriptionLabel}>Description:</span>
          <p className={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            similique, temporibus mollitia aut modi quas earum ex aspernatur
            necessitatibus possimus. Veniam tempore quod eveniet veritatis velit
            fuga saepe soluta voluptatum.
          </p>
        </div>
        <div className={styles.gameOrder}>
          <span className={styles.gamePrice}>{game.price} ₴</span>
          <OrderButton game={game} onClick={() => handleOrderClick(game)} />
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
