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
        <h3 className={styles.formTitle}>Оформлення заказу</h3>
        <p className={styles.formSubtitle}>
          Заповніть усі поля нижче, будь ласка
        </p>
        <Input
          type="text"
          name="firstName"
          placeholder="Ім'я"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Це поле обов'язкове",
            pattern: {
              // eslint-disable-next-line
              value: /^[А-Яа-яA-Za-z\ ]+$/i,
              message: "Ім'я не може складатися з символів чи цифр",
            },
          }}
        />
        <Input
          type="text"
          name="surname"
          placeholder="Призвіще"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Це поле обов'язкове",
            pattern: {
              // eslint-disable-next-line
              value: /^[А-Яа-яA-Za-z\ ]+$/i,
              message: "Призвіще не може складатися з символів чи цифр",
            },
          }}
        />
        <Input
          type="text"
          name="credit"
          placeholder="Номер картки (16 цифр)"
          errors={errors}
          register={register}
          maxLength={16}
          validationSchema={{
            required: "Це поле обов'язкове",
            maxLength: { value: 16, message: "Введіть 16 цифр" },
            pattern: {
              value: /[0-9]{16}/,
              message: "Введіть 16 цифр",
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
            required: "Це поле обов'язкове",
            pattern: {
              // eslint-disable-next-line
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Введіть коректну адресу пошти",
            },
          }}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Моб. номер (починаючи з 0)"
          errors={errors}
          register={register}
          maxLength={10}
          validationSchema={{
            required: "Це поле обов'язкове",
            pattern: {
              // eslint-disable-next-line
              value: /[0-9]{10}/,
              message: "Введіть коректний номер телефону",
            },
          }}
        />

        <div className={styles.orderTypes}>
          <div className={styles.orderType}>
            <label htmlFor="orderTypePost">Поштою</label>
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
            <label htmlFor="orderTypePost">Адресна</label>
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
            <option value="NovaPoshta">Нова Пошта</option>
            <option value="Ukrposhta">Укрпочта</option>
          </select>
        )}
        <Input
          type="text"
          name="address"
          placeholder="Адреса"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Це поле обов'язкове",
          }}
        />

        <span className={styles.orderTotalPrice}>{totalPrice} ₴</span>
        <div className={styles.orderButtons}>
          <BackButton />
          <input type="submit" value="Зробити покупку" />
        </div>
      </div>
    </form>
  );
};

export default Order;
