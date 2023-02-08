import styles from './Game.module.scss';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary.jsx';
import ButtonSecondary from '../UI/ButtonSecondary/ButtonSecondary.jsx';

const Game = () => {
  return (
    <div className={[styles.game, 'paper'].join(' ')}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h3>Счет: 40</h3>
          <h3>Время: 35</h3>
        </div>
        <div className={styles.buttons}>
          <ButtonPrimary className={styles.button}>Настройки</ButtonPrimary>
          <ButtonSecondary className={styles.button}>Еще раз</ButtonSecondary>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Game;
