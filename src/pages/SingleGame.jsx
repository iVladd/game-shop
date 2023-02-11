import React, { useCallback, useEffect, useMemo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderButton from "../components/OrderButton";
import styles from "../scss/components/singlegame.module.scss";

const SingleGame = () => {
  const gameId = useParams().id;

  const allGames = useSelector((state) => state.games.games[0]);

  const game = allGames && allGames.find((game) => game.id === gameId);

  console.log(game);

  return <h1>Game</h1>;
};

export default SingleGame;
