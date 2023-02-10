import styles from './Settings.module.scss';

const RadioButtons = ({ difficulty, setDifficulty }) => {
  const data = [
    { value: 'easy', text: 'Простой 8x8, 10 мин' },
    { value: 'medium', text: 'Средний 16x16, 40 мин' },
    { value: 'hard', text: 'Сложный 32x16, 100 мин' }
  ];

  return (
    <>
      {data.map(item => (
        <label key={item.value} className={styles.label}>
          <input
            className={styles.input}
            value={item.value}
            name="settings"
            type="radio"
            checked={difficulty === item.value}
            onChange={e => setDifficulty(e.target.value)}
          />
          <span className={styles.span}>{item.text}</span>
        </label>
      ))}
    </>
  );
};

export default RadioButtons;
