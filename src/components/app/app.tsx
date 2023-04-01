import { FC } from "react";
import styles from "./app.module.scss";
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";

const App: FC = () => {
  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Зарабатывайте больше{" "}
            <span className={`${styles.color_gradient} ${styles.d_block}`}>
              {" "}
              с WEBLEX
            </span>
          </h1>
          <p className={styles.subtitle}>
            Развиваем и контролируем продажи за вас
          </p>
        </div>
        <div className={styles.benefits}>
          <h2 className={styles.benefits__title}>
            Вместе с{" "}
            <span className={`${styles.color_gradient} ${styles.ttl}`}>
              БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ
            </span>{" "}
            мы дарим:
          </h2>
          <ul className={styles.benefits__list}>
            <li className={styles.benefits__item}>
              <h3 className={styles.benefits__subtitle_db}>Виджеты</h3>
              <h3 className={styles.benefits__subtitle_smallScreen}>
                30 виджетов
              </h3>
              <p className={styles.benefits__paragraph}>30 готовых решений</p>
            </li>
            <li className={styles.benefits__item}>
              <h3 className={`${styles.benefits__subtitle}`}>Dashboard</h3>
              <p className={styles.benefits__paragraph}>
                с показателями вашего бизнеса
              </p>
            </li>
            <li className={styles.benefits__item}>
              <h3 className={`${styles.benefits__subtitle}`}>Skype Аудит</h3>
              <p className={styles.benefits__paragraph}>
                отдела&nbsp;продажи и CRM системы
              </p>
            </li>
            <li className={styles.benefits__item}>
              <h3 className={styles.benefits__subtitle_db}>35 дней</h3>
              <h3 className={styles.benefits__subtitle_smallScreen}>
                Месяц аmoCRM
              </h3>
              <p className={styles.benefits__paragraph}>использования CRM</p>
            </li>
          </ul>
          <button className={styles.button}>Получить консультацию</button>
        </div>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
