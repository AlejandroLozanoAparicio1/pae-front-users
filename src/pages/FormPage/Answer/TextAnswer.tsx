import { useContext, useRef } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './answer.module.scss';

const TextAnswer: React.FC<PossibleAnswerType> = (props) => {
  const useAnswersContext = useContext(AnswersContext);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.possible_answer_container}>
      <input
        className={styles.possible_answer_input}
        type='radio'
        value={ref.current?.value}
        key={props.answer.answer_id}
        onClick={useAnswersContext?.handleAnswer}
        name={props.question_id.toString()}
        id={props.question_id.toString() + '_' + props.answer.answer_id.toString()}
      />
      <label className={styles.possible_answer_label}>{props.answer.answer}</label>
      <input
        className={styles.possible_answer_input}
        type={props.answer.answer_type}
        key={'text_' + props.answer.answer_id}
        name={props.question_id.toString()}
        ref={ref}
        id={props.question_id.toString() + '_' + props.answer.answer_id.toString()}
      />
    </div>
  );
};

export default TextAnswer;
