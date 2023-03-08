import { useContext } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './possible_answer.module.scss';

const PossibleAnswer: React.FC<PossibleAnswerType> = (props) => {
  const useAnswersContext = useContext(AnswersContext);

  return (
    <div className={styles.possible_answer_container}>
      <input
        className={styles.possible_answer_input}
        type='radio'
        value={props.possibleAnswer}
        key={props.id + '_' + props.possibleAnswer}
        onClick={useAnswersContext?.handleAnswer}
        id={props.id + '_' + props.possibleAnswer}
      />
      <label className={styles.possible_answer_label}>{props.possibleAnswer}</label>
    </div>
  );
};

export default PossibleAnswer;
