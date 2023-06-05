import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Switch } from '../../components/Switch/Switch';
import { LabelsContext } from '../../context/LabelsContext';
import styles from './ConsentPage.module.scss';

export const ConsentPage: React.FC = () => {
  const { get } = useContext(LabelsContext);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/forms/demo1/0');
  };

  return (
    <div className={styles.consentPage}>
      <div className={styles.textContainer}>
        <p>{get('consentForm.1')}</p>
        <br />
        <p>{get('consentForm.2')}</p>
        <br />
        <p>{get('consentForm.3')}</p>
        <br />
        <p>{get('consentForm.4')}</p>
        <ul>
          <li>{get('consentForm.5')}</li>
          <li>{get('consentForm.6')}</li>
          <li>{get('consentForm.7')}</li>
          <li>{get('consentForm.8')}</li>
        </ul>
        <br />
        <p>{get('consentForm.9')}</p>
        <br />
        <div className={styles.inputContainer}>
          <div className={styles.switchContainer}>
            <Switch
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
          </div>

          <Button text={get('consentForm.button')} disabled={!checked} onClick={handleBtnClick} />
        </div>
      </div>
    </div>
  );
};
