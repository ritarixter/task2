import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./app-footer.module.scss";
import { menu, aboutCompany } from "../../utils/data";
import { phoneNumber, phoneNumberString } from "../../utils/constants";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import phone from "../../images/phone.svg";

const AppFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.title}>О компании</h3>
        <ul className={styles.list}>
          {aboutCompany.map((item, index) => (
            <li className={styles.list__item} key={index}>
              <Link to="/" className={styles.link}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.menu}>
        <h3 className={styles.title}>Меню</h3>
        <ul className={styles.list}>
          {menu.map((item, index) => (
            <li className={styles.list__item} key={index}>
              <Link to="/" className={styles.link}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contacts}>
        <h3 className={styles.title}>Контакты</h3>
        <ul className={`${styles.list} ${styles.list_contacts}`}>
          <li className={styles.list__item}>
            <Link to={`tel:+${phoneNumber}`} className={styles.phone}>
              {phoneNumberString}
            </Link>
          </li>
          <li className={styles.list__item}>
            <ul className={styles.icons}>
              <li className={styles.icons__item}>
                <Link
                  to={`https://t.me/${phoneNumber}`}
                  className={styles.link}
                >
                  <img src={telegram} alt="Иконка Telegram" />
                </Link>
              </li>
              <li className={styles.icons__item}>
                <Link to={`tel:+${phoneNumber}`} className={styles.link}>
                  <img src={phone} alt="Иконка телефона" />
                </Link>
              </li>
              <li className={styles.icons__item}>
                <Link
                  to={`https://wa.me/${phoneNumber}`}
                  className={styles.link}
                >
                  <img src={whatsapp} alt="Иконка whatsapp" />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <address className={styles.address}>
              Москва, Путевой проезд 3с1, к 902
            </address>
          </li>
          <li className={styles.copyright}>
            <p className={styles.copyright__paragraph}>
              ©WELBEX 2022. Все права защищены.
            </p>
            <Link to="/" className={styles.copyright__link}>
              Политика конфиденциальности
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default AppFooter;
