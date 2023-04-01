import { useContext } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './answer.module.scss';

const RadioAnswer: React.FC<PossibleAnswerType> = ({ answer, question_id }) => {
  const useAnswersContext = useContext(AnswersContext);

  const handleAnswer = (e: any) => {
    const questionId = question_id.toString();
    const answerId = answer.answer_id.toString();
    const aux = useAnswersContext
      ? useAnswersContext?.answers.slice(0, useAnswersContext?.answers.length)
      : [];

    let isInside = false;
    for (let j = 0; j < aux.length; j++) {
      if (questionId === aux[j].questionId) {
        aux[j].answerId = answerId;
        aux[j].answerText = e.target.value;
        isInside = true;
      }
    }
    if (!isInside) {
      aux.push({ questionId: questionId, answerId: answerId });
    }
    useAnswersContext?.setAnswers(aux);
  };

  return (
    <div className={styles.answer_container}>
      <label className={styles.answer_label}>
        <input
          className={styles.answer_input}
          type={answer.answer_type}
          value={answer.answer_id}
          key={answer.answer_id}
          onClick={handleAnswer}
          name={question_id.toString()}
          id={question_id.toString() + '_' + answer.answer_id.toString()}
        />
        <span className={styles.answer_text_span}>{answer.answer}</span>
      </label>
    </div>
  );
};

export default RadioAnswer;
