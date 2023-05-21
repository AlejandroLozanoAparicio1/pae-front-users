import { useState } from 'react';
import styles from './answer.module.scss';

const TextAnswer: React.FC<PossibleAnswer> = ({ questionId, option, type }) => {
  const [answerText, setAnswerText] = useState('');

  return (
    <div className={styles.answerContainer}>
      <input
        className={`styles.answerRadio  ${styles.answerInput}`}
        type='radio'
        value={answerText}
        key={option.optionsId}
        name={questionId.toString()}
        id={questionId.toString() + '_' + option.optionsId.toString()}
        required
      />
      <label
        htmlFor={questionId.toString() + '_' + option.optionsId.toString()}
        className={styles.answerLabel}
      >
        {option.options}
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
