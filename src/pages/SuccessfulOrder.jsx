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
        <h2 className={styles.soTitle}>Ваш заказ успешно оформлен!</h2>
        <p className={styles.soSubTitle}>
          В ближайшее время с Вами свяжется менеджер для уточнения деталей
          заказа
        </p>
        <BackButton
          text="На главную"
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
