import styles from './List.module.scss';

const List = ({ users }) => {
  return (
    <ul className={styles.list}>
      {users.length > 0 ? (
        users.map(user => (
          <li key={user.userName} className={styles.item}>
            <div>{user.userName}</div>
            <span>{`${user.userTime} сек.`}</span>
          </li>
        ))
      ) : (
        <div>Список лидеров пуст...</div>
      )}
    </ul>
  );
};

export default List;
