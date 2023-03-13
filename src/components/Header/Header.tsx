import { useState } from 'react';
import logo from '../../assets/logo.png';
import PageList from '../PageList/PageList';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const hambClass = hamburgerMenu ? styles._open : styles._closed;

  const handleHamburguerClick = (e: any) => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <>
      <div className={styles.header}>
        <button
          onClick={handleHamburguerClick}
          className={`${styles._hamburguer_menu} ${hambClass}`}
        >
          <span className={styles._line}></span>
          <span className={styles._line}></span>
          <span className={styles._line}></span>
        </button>
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
      </div>
      {hamburgerMenu && <PageList />}
    </>
  );
};

export default Header;
