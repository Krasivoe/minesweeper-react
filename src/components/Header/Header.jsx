import styles from './Header.module.scss';
import Navbar from '../Navbar/Navbar.jsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
