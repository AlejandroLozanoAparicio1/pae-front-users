import { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LabelsContext } from '../../context/LabelsContext';
import Select from '../Select/Select';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const { get, setLang, lang } = useContext(LabelsContext);
  const languageOptions = [
    { text: get('selectLanguage.en'), value: 'en' },
    { text: get('selectLanguage.es'), value: 'es' },
    { text: get('selectLanguage.cat'), value: 'cat' },
  ];

  const powderBlue = '#a4b8c4';
  const ultreViolet = '#655a7c';
  const { pathname } = useLocation();

  console.log();

  return (
    <>
      <div
        style={{ backgroundColor: pathname === '/stats' ? ultreViolet : powderBlue }}
        className={styles.header}
      >
        <h3 className={styles.formTitle}>Hospital Clínic</h3>
        <div className={styles.button}>
          <Select
            options={languageOptions}
            disabled={false}
            onChange={(elem: any) => {
              setLang(elem.target.value);
            }}
            defaultValue={lang}
          ></Select>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
