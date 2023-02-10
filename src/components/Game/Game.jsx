import styles from './Game.module.scss';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary.jsx';
import ButtonSecondary from '../UI/ButtonSecondary/ButtonSecondary.jsx';
import Board from '../Board/Board.jsx';
import { useEffect, useState } from 'react';
import { initBoard } from '../../utils/index.js';
import { useTime } from '../../hooks/useTime.js';

const Game = ({ data, setGameStarted }) => {
  const [gameStatus, setGameStatus] = useState('😁');
  const [grid, setGrid] = useState(() => initBoard(data));
  const [mineCount, setMineCount] = useState(data.mines);
  const [time, setTime, timer] = useTime();

  useEffect(() => {
    if (gameStatus !== '😁') {
      clearInterval(timer);
    }
  }, [gameStatus, timer]);

  const moveSettings = () => {
    setGameStarted(false);
  };

  const resetGame = setupData => {
    setGameStatus('😁');
    setTime(0);
    setGrid(initBoard(setupData));
    setMineCount(data.mines);
  };

  return (
    <div className={[styles.game, 'paper'].join(' ')}>
      <div className={styles.top}>
        <h3>{gameStatus}</h3>
        <div className={styles.info}>
          <h3>Счет: {mineCount}</h3>
          <h3>Время: {time}</h3>
        </div>
        <div className={styles.buttons}>
          <ButtonSecondary className={styles.button} onClick={moveSettings}>
            Настройки
          </ButtonSecondary>
          <ButtonPrimary className={styles.button} onClick={() => resetGame(data)}>
            Обновить игру
          </ButtonPrimary>
        </div>
      </div>
      <div className={styles.bottom}>
        <Board
          data={data}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          grid={grid}
          setGrid={setGrid}
          mineCount={mineCount}
          setMineCount={setMineCount}
        />
      </div>
    </div>
  );
};

export default Game;
