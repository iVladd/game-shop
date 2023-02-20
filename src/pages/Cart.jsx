import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../scss/components/cart.module.scss";
import {
  IoCartOutline,
  IoChevronBackOutline,
  IoTrashOutline,
} from "react-icons/io5";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderedGames = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log(orderedGames, totalPrice);

  if (!orderedGames.length) {
    return <div>Вы еще ничего не заказали</div>;
  }

  return (
    <div className={styles.cartContainer}>
      <header className={styles.cartHeader}>
        <span className={styles.cartTitle}>
          <IoCartOutline size="1.4em" /> Корзина
        </span>
        <button
          className={styles.cartButton}
          onClick={() => dispatch(clearCart())}
        >
          <IoTrashOutline />
          Очистить корзину
        </button>
      </header>

      {orderedGames.map((game) => (
        <CartItem key={game.id} game={game} />
      ))}

      <footer className={styles.cartFooter}>
        <div className={styles.orderInfo}>
          <div className={styles.totalCountBlock}>
            <span className={styles.totalCountLabel}>Всего игр: </span>
            <span className={styles.totalCountNumber}>
              {orderedGames.reduce((sum, game) => sum + game.count, 0)} шт.
            </span>
          </div>

          <div className={styles.totalPriceBlock}>
            <span className={styles.totalPriceLabel}>Сумма заказа: </span>
            <span className={styles.totalPriceNumber}>{totalPrice} ₴</span>
          </div>
        </div>

        <div className={styles.totalButtonsBlock}>
          <button
            className={styles.totalBackButton}
            onClick={() => navigate(-1)}
          >
            <IoChevronBackOutline size={"1.5em"} />
            Вернуться назад
          </button>
          <button className={styles.totalOrderButton}>Оплатить сейчас</button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
