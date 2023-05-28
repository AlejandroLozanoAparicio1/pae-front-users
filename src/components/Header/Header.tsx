import { useState } from 'react';
import logo from '../../assets/logo.png';
import PageList from '../PageList/PageList';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const hambClass = hamburgerMenu ? styles.open : styles.closed;

  const handleHamburguerClick = (e: any) => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <>
      <div className={styles.header}>
        <button onClick={handleHamburguerClick} className={`${styles.hamburguerMenu} ${hambClass}`}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
        <img className={styles.logo} src={logo} alt='logo' />
        {/* <ul className={styles.links}>
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
        </ul> */}
      </div>
      {hamburgerMenu && <PageList />}
    </>
  );
};

export default Header;
