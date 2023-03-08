import logo from '../../assets/logo.png';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img className={styles._logo} src={logo} alt='logo' />
      <ul className={styles._links}>
        <li>
          <a href={'/'}>Questionario</a>
        </li>
        <li>
          <a href={'/info'}>Información</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
