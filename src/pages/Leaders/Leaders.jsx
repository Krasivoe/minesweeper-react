import styles from './Leaders.module.scss';
import List from '../../components/UI/List/List.jsx';
import { useContext } from 'react';
import { UserContext } from '../../context/index.js';

const Leaders = () => {
  const { users } = useContext(UserContext);
  const sortedAndShortedUsers = users
    .sort((a, b) => {
      return a.userTime - b.userTime || a.userName.localeCompare(b.userName);
    })
    .slice(0, 10);

  return (
    <div className={[styles.leaders, 'paper'].join(' ')}>
      <h2>Лучшие игроки</h2>
      <List users={sortedAndShortedUsers} />
    </div>
  );
};

export default Leaders;
