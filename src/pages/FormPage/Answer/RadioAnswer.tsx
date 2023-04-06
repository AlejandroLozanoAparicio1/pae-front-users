import { useContext } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './answer.module.scss';

const RadioAnswer: React.FC<PossibleAnswerType> = ({ questionId, option, type }) => {
  const useAnswersContext = useContext(AnswersContext);

  const handleAnswer = (e: any) => {
    const questionIdStr = questionId.toString();
    const answerId = option.optionsId.toString();
    const aux = useAnswersContext
      ? useAnswersContext?.answers.slice(0, useAnswersContext?.answers.length)
      : [];

    let isInside = false;
    for (let j = 0; j < aux.length; j++) {
      if (questionIdStr === aux[j].questionId) {
        aux[j].answerId = answerId;
        aux[j].answerText = e.target.value;
        isInside = true;
      }
    }
    if (!isInside) {
      aux.push({ questionId: questionIdStr, answerId: answerId });
    }
    useAnswersContext?.setAnswers(aux);
  };

  return (
    <div className={styles.answerContainer}>
      <input
        className={styles.answerRadio}
        type={type}
        value={option.optionsId}
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
    </div>
  );
};

export default RadioAnswer;
