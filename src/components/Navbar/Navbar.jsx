import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={[styles.navbar, 'container'].join(' ')}>
      <Link to="/" className={styles.link}>
        Игра
      </Link>
      <Link to="/leaders" className={styles.link}>
        Лидеры
      </Link>
    </nav>
  );
};

export default Navbar;
