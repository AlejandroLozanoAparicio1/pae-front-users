import { useContext } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './answer.module.scss';

const RadioAnswer: React.FC<PossibleAnswerType> = (props) => {
  const useAnswersContext = useContext(AnswersContext);

  const handleAnswer = (e: any) => {
    const question_id = props.question_id.toString();
    const answer_id = props.answer.answer_id.toString();
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
      aux.push({ questionId: question_id, answerId: answer_id });
    }
    useAnswersContext?.setAnswers(aux);
  };

  return (
    <div className={styles.possible_answer_container}>
      <>
        <label className={styles.possible_answer_label}>
          <input
            className={styles.possible_answer_input}
            type={props.answer.answer_type}
            value={props.answer.answer_id}
            // value={props.answer.answer}
            key={props.answer.answer_id}
            onClick={handleAnswer}
            name={props.question_id.toString()}
            id={props.question_id.toString() + '_' + props.answer.answer_id.toString()}
          />
          {props.answer.answer}
        </label>
      </>
    </div>
  );
};

export default RadioAnswer;
