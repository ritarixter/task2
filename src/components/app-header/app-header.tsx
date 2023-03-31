import { FC } from "react";
import styles from "./app-header.module.scss"
import logo from '../../images/logo_welbex.svg'
import { Link } from "react-router-dom";

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <Link to='/'><img src={logo} alt="Логотип welbex"  className={styles.logo}/></Link>

    <nav className={styles.nav}>
    <Link to='/' className={styles.link}>Услуги</Link>
    <Link to='/' className={styles.link}>Виджеты</Link>
    <Link to='/'className={styles.link}>Интеграции</Link>
    <Link to='/' className={styles.link}>Кейсы</Link>
    <Link to='/' className={styles.link}>Сертификаты</Link>
    </nav>
  </header>
  )
}

export default AppHeader;