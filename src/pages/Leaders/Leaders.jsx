import styles from './Leaders.module.scss';

const Leaders = () => {
  return (
    <div className={[styles.leaders, 'paper'].join(' ')}>
      <h2>Лучшие игроки</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div>Игорь Войтенко1</div>
          <span>195</span>
        </li>
      </ul>
    </div>
  );
};

export default Leaders;
