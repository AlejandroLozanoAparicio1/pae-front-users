import { useContext } from 'react';
import { LabelsContext } from '../../../context/LabelsContext';
import styles from './answer.module.scss';
import checkbox from './checkbox.module.scss';

const CheckboxAnswer: React.FC<PossibleAnswer> = ({ questionId, option, type, handleChange }) => {
  const { lang } = useContext(LabelsContext);

  const getTranslation = () => {
    const { traduccion } = option;
    const catTranslation =
      traduccion[0].idioma === 'cat' ? traduccion[0].traduccion : traduccion[1].traduccion;
    const enTranslation =
      traduccion[0].idioma === 'en' ? traduccion[0].traduccion : traduccion[1].traduccion;

    switch (lang) {
      case 'es':
        return option.options;
      case 'en':
        return enTranslation;
      case 'cat':
        return catTranslation;
    }
  };

  const translatedOpt = getTranslation();

  return (
    <div className={`${styles.answerContainer} ${checkbox.checkbox}`}>
      <input
        type={type}
        value={option.optionsId}
        key={option.optionsId}
        name={questionId.toString() + '_' + option.optionsId.toString()}
        id={questionId.toString() + '_' + option.optionsId.toString()}
        className={checkbox.checkboxFlip}
        onChange={handleChange}
      />
      <label htmlFor={questionId.toString() + '_' + option.optionsId.toString()}>
        <span></span>
        {translatedOpt}
      </label>
    </div>
  );
};

export default CheckboxAnswer;
