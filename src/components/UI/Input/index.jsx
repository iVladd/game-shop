import React from "react";
import styles from "./input.module.scss";

const Input = ({
  type = "text",
  placeholder,
  errors,
  name,
  register,
  validationSchema,
  maxLength,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        name={name}
        maxLength={maxLength}
        {...register(name, validationSchema)}
      />

      {errors && errors[name]?.type === "required" && (
        <span className={styles.error}>{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === "pattern" && (
        <span className={styles.error}>{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === "maxLength" && (
        <span className={styles.error}>{errors[name]?.message}</span>
      )}
    </>
  );
};

export default Input;
