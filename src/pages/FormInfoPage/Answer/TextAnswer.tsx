import { useContext, useState } from 'react';
import { LabelsContext } from '../../../context/LabelsContext';
import styles from './answer.module.scss';

const TextAnswer: React.FC<PossibleAnswer & { radio?: boolean }> = ({
  questionId,
  option,
  type,
  handleChange,
  radio = true,
}) => {
  const { lang } = useContext(LabelsContext);
  const [answerText, setAnswerText] = useState('');

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
      {radio && (
        <input
          className={`styles.answerRadio ${styles.answerInput}`}
          type='radio'
          value={answerText}
          key={option.optionsId}
          name={questionId.toString()}
          id={questionId.toString() + '_' + option.optionsId.toString()}
          required
          onChange={handleChange}
        />
      )}
      <label
        htmlFor={questionId.toString() + '_' + option.optionsId.toString()}
        className={styles.answerLabel}
      >
        {translatedOpt}
      </label>
      <input
        className={styles.answerText}
        type={type}
        key={'text_' + option.optionsId}
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        id={questionId.toString() + '_' + option.optionsId.toString()}
      />
    </div>
  );
};

export default TextAnswer;
