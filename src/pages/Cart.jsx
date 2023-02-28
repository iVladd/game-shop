import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../scss/components/cart.module.scss";
import { IoCartOutline, IoTrashOutline } from "react-icons/io5";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import CartEmpty from "../components/CartEmpty";
import BackButton from "../components/UI/BackButton";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderedGames = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  if (!orderedGames.length) {
    return <CartEmpty />;
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
          <BackButton />
          <button
            className={styles.totalOrderButton}
            onClick={() => navigate("/order")}
          >
            Оплатить сейчас
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
