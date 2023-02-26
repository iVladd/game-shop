import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleGame from "./pages/SingleGame";
import Order from "./pages/Order";
import { fetchGames } from "./features/games/gamesSlice";
import "./scss/app.scss";
import SuccessfulOrder from "./pages/SuccessfulOrder";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/success" element={<SuccessfulOrder />} />
        <Route path="/game/:id" element={<SingleGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
