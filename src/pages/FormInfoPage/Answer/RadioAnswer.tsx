import { useContext } from 'react';
import { LabelsContext } from '../../../context/LabelsContext';
import styles from './answer.module.scss';

const RadioAnswer: React.FC<PossibleAnswer> = ({ questionId, option, type, handleChange }) => {
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
    <div className={styles.answerContainer}>
      <input
        className={`styles.answerRadio ${styles.answerInput}`}
        type={type}
        value={option.optionsId}
        key={option.optionsId}
        name={questionId.toString()}
        id={questionId.toString() + '_' + option.optionsId.toString()}
        required
        onChange={handleChange}
      />
      <label
        htmlFor={questionId.toString() + '_' + option.optionsId.toString()}
        className={styles.answerLabel}
      >
        {translatedOpt}
      </label>
    </div>
  );
};

export default RadioAnswer;
