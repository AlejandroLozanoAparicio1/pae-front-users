import logo from '../../assets/logo.png';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img className={styles._logo} src={logo} alt='logo' />
      <ul className={styles._links}>
        <li>
          <a key={'link_questionario'} href={'/'}>
            Questionario
          </a>
        </li>
        <li>
          <a key={'link_información'} href={'/info'}>
            Información
          </a>
        </li>
      </ul>
      <div className={styles._hamburguer_menu}>
        <span className={styles._line}></span>
        <span className={styles._line}></span>
        <span className={styles._line}></span>
      </div>
    </div>
  );
};

export default Header;
