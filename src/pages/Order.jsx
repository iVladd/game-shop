import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/UI/BackButton";
import Input from "../components/UI/Input";
import styles from "../scss/components/order.module.scss";

const Order = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const orderedGames = useSelector((state) => state.cart.items);
  const [orderType, setOrderType] = useState("post");

  const onSubmit = (data) => {
    if (data.orderType === "address") delete data.postCompany;
    data.date = new Date();
    data.order = orderedGames;
    console.log(data);
    navigate("success");
  };

  return (
    <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.orderFormWrapper}>
        <h3 className={styles.formTitle}>Оформление заказа</h3>
        <p className={styles.formSubtitle}>
          Заполните все поля ниже, пожалуйста
        </p>
        <Input
          type="text"
          name="firstName"
          placeholder="Имя"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Это поле обязательно",
            pattern: {
              // eslint-disable-next-line
              value: /^[А-Яа-яA-Za-z\ ]+$/i,
              message: "Имя не может содержать цифри или символы",
            },
          }}
        />
        <Input
          type="text"
          name="surname"
          placeholder="Фамилия"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Это поле обязательно",
            pattern: {
              // eslint-disable-next-line
              value: /^[А-Яа-яA-Za-z\ ]+$/i,
              message: "Фамилия не может содержать цифри или символы",
            },
          }}
        />
        <Input
          type="text"
          name="credit"
          placeholder="Номер карты (16 цифр)"
          errors={errors}
          register={register}
          maxLength={16}
          validationSchema={{
            required: "Это поле обязательно",
            maxLength: { value: 16, message: "Введите 16 цифр" },
            pattern: {
              value: /[0-9]{16}/,
              message: "Введите 16 цифр",
            },
          }}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Это поле обязательно",
            pattern: {
              // eslint-disable-next-line
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Введите корректный адрес почты",
            },
          }}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Моб. номер (начиная с 0)"
          errors={errors}
          register={register}
          maxLength={10}
          validationSchema={{
            required: "Это поле обязательно",
            pattern: {
              // eslint-disable-next-line
              value: /[0-9]{10}/,
              message: "Введите корректный номер телефона",
            },
          }}
        />

        <div className={styles.orderTypes}>
          <div className={styles.orderType}>
            <label htmlFor="orderTypePost">Почтой</label>
            <input
              type="radio"
              name="orderType"
              value="post"
              id="orderTypePost"
              checked={orderType === "post"}
              onClick={(e) => setOrderType(e.target.value)}
              {...register("orderType")}
            />
          </div>
          <div className={styles.orderType}>
            <label htmlFor="orderTypePost">Адрессная</label>
            <input
              type="radio"
              name="orderType"
              value="address"
              id="orderTypeAddress"
              checked={orderType === "address"}
              onClick={(e) => setOrderType(e.target.value)}
              {...register("orderType")}
            />
          </div>
        </div>
        {orderType === "post" && (
          <select name="postCompany" {...register("postCompany")}>
            <option value="NovaPoshta">Новая почта</option>
            <option value="Ukrposhta">Укрпочта</option>
          </select>
        )}
        <Input
          type="text"
          name="address"
          placeholder="Адрес"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Это поле обязательно",
          }}
        />

        <span className={styles.orderTotalPrice}>{totalPrice} ₴</span>
        <div className={styles.orderButtons}>
          <BackButton />
          <input type="submit" value="Сделать покупку" />
        </div>
      </div>
    </form>
  );
};

export default Order;
