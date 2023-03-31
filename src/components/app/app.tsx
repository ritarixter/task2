import { FC } from 'react';
import styles from './app.module.scss';
import AppHeader from '../app-header/app-header';

const App: FC = () => {
  return (
    <>
    <AppHeader/>
    <main className={styles.main}></main>
    </>
  )
}

export default App;
