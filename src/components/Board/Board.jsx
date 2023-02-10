import styles from './Board.module.scss';
import Cell from '../UI/Cell/Cell.jsx';
import { produce } from 'immer';
import { showEmptyCells, showGridLose, showGridWin } from '../../utils/index.js';

const Board = ({ data, gameStatus, setGameStatus, grid, setGrid, mineCount, setMineCount }) => {
  const onLeftClick = (x, y) => {
    if (grid[x][y].isOpen || grid[x][y].flagIndex > 0 || gameStatus !== '😁') return;

    const updatedGrid = produce(grid, draft => {
      Object.assign(draft[x][y], { isOpen: true });
      if (draft[x][y].isEmpty) {
        showEmptyCells(data.height, data.width, x, y, draft);
      }
    });

    // Поражение
    if (updatedGrid[x][y].isMine) {
      const openedGrid = showGridLose(updatedGrid);
      setGrid(openedGrid);
      setGameStatus('😤');
      return;
    }

    const hiddenGrid = updatedGrid.flat().filter(cell => !cell.isOpen);
    // Победа
    if (hiddenGrid.length === data.mines) {
      const finalGrid = showGridWin(updatedGrid);
      setGrid(finalGrid);
      setMineCount(0);
      setGameStatus('😎');
      return;
    }

    setGrid(updatedGrid);
  };

  const onRightClick = (e, x, y) => {
    e.preventDefault();
    if (grid[x][y].isOpen || gameStatus !== '😁') return;

    let mineCountPlaceholder = mineCount;
    const updatedGrid = produce(grid, draft => {
      draft[x][y].flagIndex = draft[x][y].flagIndex > 1 ? 0 : draft[x][y].flagIndex + 1;

      draft[x][y].flagIndex === 1 && (mineCountPlaceholder -= 1);
      draft[x][y].flagIndex === 2 && (mineCountPlaceholder += 1);

      setMineCount(mineCountPlaceholder);
    });

    setGrid(updatedGrid);
  };

  return (
    <div
      className={styles.board}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${data.height}, 30px)`, //width
        gridTemplateRows: `repeat(${data.width}, 30px)` //height
      }}
    >
      {grid.map((row, i) =>
        row.map((col, j) => (
          <Cell
            onLClick={(i, j) => onLeftClick(i, j)}
            onRClick={(e, i, j) => onRightClick(e, i, j)}
            key={`${i}-${j}`}
            col={col}
            i={i}
            j={j}
          />
        ))
      )}
    </div>
  );
};

export default Board;
