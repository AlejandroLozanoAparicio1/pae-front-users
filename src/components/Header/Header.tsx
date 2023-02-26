import logo from '../../assets/logo.png';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img className={styles._logo} src={logo} alt='logo' />
    </div>
  );
};

export default Header;
