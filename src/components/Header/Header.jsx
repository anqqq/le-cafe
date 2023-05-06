import React from "react";
import styles from "./Header.module.scss";

import logo from "../../assets/svg/logo-small.svg";
import cart from "../../assets/svg/cart.svg";

export const Header = () => {
  console.log(styles);
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <a href="/about">о нас</a>
        <a href="/contacts">контакты</a>
      </div>
      <div className={styles.middle}>
        <img src={logo} className={styles.logo} alt="logo" />
        <span>le cafe</span>
      </div>
      <div className={styles.right}>
        <a href="/booking">бронирование</a>
        <a href="/menu">меню</a>
        <a href="/cart">
          <img src={cart} alt="cart" />
        </a>
      </div>
    </div>
  );
};
