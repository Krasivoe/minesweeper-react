import styles from './Game.module.scss';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary.jsx';
import ButtonSecondary from '../UI/ButtonSecondary/ButtonSecondary.jsx';
import Board from '../Board/Board.jsx';
import { useContext, useEffect, useState } from 'react';
import { initBoard } from '../../utils/index.js';
import { UserContext } from '../../context/index.js';

const Game = ({ data, setGameStarted, name }) => {
  const windowWidth = document.documentElement.clientWidth;
  const { users, setUsers } = useContext(UserContext);
  const [gameStatus, setGameStatus] = useState('😁');
  const [grid, setGrid] = useState(() => initBoard(data));
  const [mineCount, setMineCount] = useState(data.mines);
  const [mobileFlag, setMobileFlag] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isTimeActive, setIsTimeActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isTimeActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    if ((!isTimeActive && seconds !== 0) || seconds >= 999) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimeActive, seconds]);

  useEffect(() => {
    if (gameStatus !== '😁') {
      setIsTimeActive(false);
    }
    if (gameStatus === '😎') {
      let updatedUsers = [...users];

      // Если имя есть в списке и текущее время меньше => просто обновить время игрока
      const foundUser = updatedUsers.find(item => item.userName === name);
      if (updatedUsers.length > 0 && foundUser) {
        updatedUsers.map(prevUser => {
          if (prevUser.userName === foundUser.userName && prevUser.userTime > seconds) {
            prevUser.userTime = seconds;
          }
          return prevUser;
        });
      } else {
        updatedUsers = [...users, { userName: name, userTime: seconds }];
      }

      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  }, [gameStatus]);

  const moveSettings = () => {
    setGameStarted(false);
  };

  const resetGame = setupData => {
    setGameStatus('😁');
    setGrid(initBoard(setupData));
    setMineCount(data.mines);

    setSeconds(0);
    setIsTimeActive(true);
  };

  return (
    <div className={[styles.game, 'paper'].join(' ')}>
      <div className={styles.control}>
        <h3>{gameStatus}</h3>
        <div className={styles.info}>
          <h3>Счет: {mineCount}</h3>
          <h3>Время: {seconds}</h3>
        </div>
        <div className={styles.buttons}>
          <ButtonSecondary className={styles.button} onClick={moveSettings}>
            Настройки
          </ButtonSecondary>
          <ButtonPrimary className={styles.button} onClick={() => resetGame(data)}>
            Обновить игру
          </ButtonPrimary>
        </div>
        {/*Добавить кнопки для смены флагов для мобильной версии*/}
        {windowWidth <= 768 && (
          <div className={styles.mobileButtons}>
            <ButtonPrimary
              className={
                mobileFlag ? [styles.mobileButton, styles.active].join(' ') : styles.mobileButton
              }
              onClick={() => setMobileFlag(prev => !prev)}
            >
              {'🚩 / ❓'}
            </ButtonPrimary>
          </div>
        )}
      </div>
      <Board
        data={data}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        grid={grid}
        setGrid={setGrid}
        mineCount={mineCount}
        setMineCount={setMineCount}
        mobileFlag={mobileFlag}
      />
    </div>
  );
};

export default Game;
