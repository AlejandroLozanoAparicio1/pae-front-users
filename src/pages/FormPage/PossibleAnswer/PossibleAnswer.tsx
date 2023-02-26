import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './possible_answer.module.scss';

const PossibleAnswer: React.FC<PossibleAnswerType> = (props) => {
  return (
    <div className={styles.possible_answer_container}>
      <input
        className={styles.possible_answer_input}
        type='radio'
        value={props.possibleAnswer}
        key={props.question + '_' + props.possibleAnswer}
      />
      <label className={styles.possible_answer_label}>{props.possibleAnswer}</label>
    </div>
  );
};

export default PossibleAnswer;
