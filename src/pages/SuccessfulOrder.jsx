import React, { useEffect } from "react";
import styles from "../scss/components/successfulorder.module.scss";
import { useDispatch } from "react-redux";
import successMark from "../assets/img/check-mark.svg";
import BackButton from "../components/UI/BackButton";
import { clearCart } from "../features/cart/cartSlice";

const SuccessfulOrder = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.soWrapper}>
      <div className={styles.soText}>
        <h2 className={styles.soTitle}>Ваше замовлення успішно оформлено!</h2>
        <p className={styles.soSubTitle}>
          Найближчим часом з Вами зв'яжеться менеджер для уточнення деталей
          замовлення
        </p>
        <BackButton
          text="На головну"
          navigation={"/"}
          additionalClass={styles.soBackButton}
        />
      </div>
      <div>
        <img src={successMark} alt="Success mark" className={styles.soImage} />
      </div>
    </div>
  );
};

export default SuccessfulOrder;
