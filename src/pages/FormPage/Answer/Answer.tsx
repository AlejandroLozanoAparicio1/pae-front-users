import { useContext } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
import GetAnswerType from '../../../utils/types/GetAnswerType';
import styles from './answer.module.scss';

const Answer: React.FC<GetAnswerType> = (props) => {
  const useAnswersContext = useContext(AnswersContext);

  return (
    <div className={styles.possible_answer_container}>
      <input
        className={styles.possible_answer_input}
        type={props.answer_type}
        value={props.answer}
        key={props.answer_id}
        onClick={useAnswersContext?.handleAnswer}
        id={props.answer_id.toString()}
      />
      <label className={styles.possible_answer_label}>{props.answer}</label>
    </div>
  );
};

export default Answer;
