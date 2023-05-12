import React, { useCallback, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import GameCard from "../components/GameCard";
import Pagination from "../components/Pagination";
import Sorting from "../components/Sorting";
import styles from "../scss/components/home.module.scss";
import { paginate } from "../utils/paginate";
import { sorting } from "../utils/sorting";

const Home = () => {
  const games = useSelector((state) => state.games.games[0]) || [];
  const filterByName = useSelector((state) => state.filters.filterByName);
  const filterByCategory = useSelector(
    (state) => state.filters.filterByCategory
  );
  const sortProperty = useSelector((state) => state.filters.sort.sortProperty);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  let sortedGames;
  let sortedGamesLength;
  let fullFilteredGames;

  if (games) {
    sortedGames = sorting(games, sortProperty)
      .filter((game) => {
        if (filterByCategory === "Усі жанри") {
          return game;
        }
        return game.genres.includes(filterByCategory);
      })
      .filter((game) =>
        game.title.toLowerCase().includes(filterByName.toLowerCase())
      );
    sortedGamesLength = sortedGames.length;
    fullFilteredGames = paginate(sortedGames, currentPage, pageSize);
  }

  const handlePageChange = useCallback((value) => {
    if (value === "forward") {
      setCurrentPage((prev) => prev + 1);
    } else if (value === "back") {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(value);
    }
  }, []);

  if (!games) {
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
        {fullFilteredGames &&
          fullFilteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
      </div>
      <Pagination
        pageSize={pageSize}
        itemsCount={sortedGamesLength}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        topMargin={80}
      />
    </>
  );
};

export default Home;
