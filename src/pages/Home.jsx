import React from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import GameCard from "../components/GameCard";
import Sorting from "../components/Sorting";
import styles from "../scss/components/home.module.scss";

const Home = () => {
  const games = useSelector((state) => state.games.games[0]);

  return (
    <>
      <Categories />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "30px 0",
        }}
      >
        <Sorting />
      </div>
      <div className={styles.gamesContainer}>
        {games && games.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </>
  );
};

export default Home;
