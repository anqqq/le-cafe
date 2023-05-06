import React from "react";
import styles from "./Footer.module.scss";
import cn from "classnames";

import inst from "../../assets/svg/inst.svg";
import telegram from "../../assets/svg/telegram.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.title}>le cafe</span>
      <div className={styles.info}>
        <div className={styles.left_side}>
          <div className={styles.address}>
            <span>Проспект Ленина, 29а</span>
            <span>+375 (29) 462 45 21</span>
          </div>

          <div className={styles.social}>
            <a href="#">
              <img src={inst} alt="instagram" />
            </a>
            <a href="#">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </div>

        <div className={styles.right_side}>
          <div className={styles.work_day}>
            <span>Режим работы</span>
            <span>7:00 - 23:00</span>
          </div>
          <div className={styles.weekend}>
            <span>Суббота, воскресенье:</span>
            <span>9:00 - 23:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
