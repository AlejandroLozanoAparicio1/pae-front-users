import { useContext, useState } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './answer.module.scss';

const TextAnswer: React.FC<PossibleAnswerType> = ({ questionId, option, type }) => {
  const useAnswersContext = useContext(AnswersContext);
  const [answerText, setAnswerText] = useState('');

  const handleAnswer = (e: any) => {
    const question_id = questionId.toString();
    const answer_id = option.optionsId.toString();
    const aux = useAnswersContext
      ? useAnswersContext?.answers.slice(0, useAnswersContext?.answers.length)
      : [];

    let isInside = false;
    for (let j = 0; j < aux.length; j++) {
      if (question_id === aux[j].questionId) {
        aux[j].answerId = answer_id;
        aux[j].answerText = e.target.value;
        isInside = true;
      }
    }
    if (!isInside) {
      aux.push({
        questionId: question_id,
        answerId: answer_id,
        answerText: answerText,
      });
    }
    useAnswersContext?.setAnswers(aux);
  };

  return (
    <div className={styles.answerContainer}>
      <input
        className={styles.answerRadio}
        type='radio'
        value={answerText}
        key={option.optionsId}
        onClick={handleAnswer}
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
