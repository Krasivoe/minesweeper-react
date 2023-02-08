import styles from './Settings.module.scss';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary.jsx';
import RadioButtons from './RadioButtons.jsx';
import Input from '../UI/Input/Input.jsx';

const Settings = ({ level, setLevel, setIsStart, setFields }) => {
  return (
    <div className={[styles.settings, 'paper'].join(' ')}>
      <div className={styles.nameArea}>
        <h2 className={styles.title}>Укажите имя</h2>
        <Input />
      </div>

      <div className={styles.levelArea}>
        <h2 className={styles.title}>Выберите сложность</h2>

        <form className={styles.form}>
          <RadioButtons level={level} setLevel={setLevel} />
        </form>
      </div>

      <ButtonPrimary className={styles.button}>Начать</ButtonPrimary>
    </div>
  );
};

export default Settings;
