import { FC } from "react";
import styles from "./app-header.module.scss";
import logo from "../../images/logo_welbex.svg";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import phone from "../../images/phone.svg";
import { Link } from "react-router-dom";
import { phoneNumber, phoneNumberString } from "../../utils/constants";

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Логотип welbex" />
          <div className={styles.logo__text}>
            крупный интегратор CRM в Росcии и ещё 8 странах
          </div>
        </Link>
        <ul className={styles.nav__items}>
          <li className={styles.nav__item}>
            <Link to="/" className={styles.link}>
              Услуги
            </Link>
          </li>
          <li className={styles.nav__item}>
            {" "}
            <Link to="/" className={styles.link}>
              Виджеты
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/" className={styles.link}>
              Интеграции
            </Link>
          </li>
          <li className={styles.nav__item}>
            {" "}
            <Link to="/" className={styles.link}>
              Кейсы
            </Link>
          </li>
          <li className={styles.nav__item}>
            {" "}
            <Link to="/" className={styles.link}>
              Сертификаты
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.contacts}>
        <Link to={`tel:+${phoneNumber}`} className={styles.link}>
          {phoneNumberString}
        </Link>
        <ul className={styles.icons}>
          <li className={styles.icons__item}>
            <Link to={`https://t.me/${phoneNumber}`} className={styles.link}>
              <img src={telegram} alt="Иконка Telegram" />
            </Link>
          </li>
          <li className={styles.icons__item}>
            <Link to={`tel:+${phoneNumber}`} className={styles.link}>
              {" "}
              <img src={phone} alt="Иконка телефона" />
            </Link>
          </li>
          <li className={styles.icons__item}>
            <Link to={`https://wa.me/${phoneNumber}`} className={styles.link}>
              <img src={whatsapp} alt="Иконка whatsapp" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
