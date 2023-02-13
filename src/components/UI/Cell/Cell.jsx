import styles from './Cell.module.scss';

const Cell = ({ col, i, j, onLClick, onRClick, width, height }) => {
  const getValue = cellData => {
    const { isMine, isOpen, neighbors, flagIndex } = cellData;
    if (!isOpen) return flagIndex ? (flagIndex === 1 ? '🚩' : '❓') : '';
    if (isMine) return '💣';
    if (neighbors) return neighbors;
  };

  const getColor = neighbor => {
    switch (neighbor) {
      case 1:
        return '#1e91fe';
      case 2:
        return '#359139';
      case 3:
        return '#f00b51';
      case 4:
        return '#014da3';
      case 5:
        return '#541f3f';
      case 6:
        return '#02b8b8';
      case 7:
        return '#171717';
      case 8:
        return '#f8f9fb';
      default:
        return '';
    }
  };

  return (
    <div
      className={
        col.isOpen ? [styles.cell, styles.shown].join(' ') : [styles.cell, styles.hidden].join(' ')
      }
      style={{
        width: width,
        height: height,
        color: getColor(col.neighbors)
      }}
      data-dimension={`${i}-${j}`}
      onClick={e => onLClick(e, i, j)}
      onContextMenu={e => onRClick(e, i, j)}
    >
      {getValue(col)}
    </div>
  );
};

export default Cell;
