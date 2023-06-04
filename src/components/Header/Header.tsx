import { useContext } from 'react';
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

  return (
    <div className={styles.header}>
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
  );
};

export default Header;
