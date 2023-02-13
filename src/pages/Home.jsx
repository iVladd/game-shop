import React, { useState } from "react";
import { Dna } from "react-loader-spinner";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import GameCard from "../components/GameCard";
import Pagination from "../components/Pagination";
import Sorting from "../components/Sorting";
import styles from "../scss/components/home.module.scss";
import { paginate } from "../utils/paginate";

const Home = () => {
  const games = useSelector((state) => state.games.games[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  let pagesCount;
  let paginated;

  if (games) {
    pagesCount = Math.ceil(games.length / pageSize);
    paginated = paginate(games, currentPage, pageSize);
  }

  const handlePageChange = (value) => {
    if (value === "forward") {
      setCurrentPage((prev) => prev + 1);
    } else if (value === "back") {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(value);
    }
  };

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
        {paginated &&
          paginated.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
      <div className={styles.pagination}>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
