import styles from './Settings.module.scss';
import stylesInput from '../../components/UI/Input/Input.module.scss';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary.jsx';
import RadioButtons from './RadioButtons.jsx';
import Input from '../UI/Input/Input.jsx';
import { useEffect, useState } from 'react';

const Settings = ({ handleSetData, name }) => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const presetData = {
    easy: {
      width: 8,
      height: 8,
      mines: 2
    },
    medium: {
      width: 16,
      height: 16,
      mines: 2
    },
    hard: {
      width: 16,
      height: 32,
      mines: 99
    }
  };

  useEffect(() => {
    setNameValue(name);
  }, [name]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameValue) {
      setNameError(true);
      return;
    }
    handleSetData(presetData[difficulty], nameValue);
  };

  return (
    <form className={[styles.settings, 'paper'].join(' ')} onSubmit={handleSubmit}>
      <div className={styles.nameArea}>
        <h2 className={styles.title}>Укажите имя</h2>
        <Input
          className={nameError ? stylesInput.error : ''}
          placeholder={nameError ? 'Укажите имя' : 'Имя'}
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
          onClick={() => setNameError(false)}
        />
      </div>

      <div className={styles.levelArea}>
        <h2 className={styles.title}>Выберите сложность</h2>

        <div className={styles.radioArea}>
          <RadioButtons difficulty={difficulty} setDifficulty={setDifficulty} />
        </div>
      </div>

      <ButtonPrimary className={styles.button} type="submit">
        Начать
      </ButtonPrimary>
    </form>
  );
};

export default Settings;
