import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './answer.module.scss';

const RadioAnswer: React.FC<PossibleAnswerType> = ({ questionId, option, type }) => {
  return (
    <div className={styles.answerContainer}>
      <input
        className={styles.answerRadio}
        type={type}
        value={option.optionsId}
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
    </div>
  );
};

export default RadioAnswer;
