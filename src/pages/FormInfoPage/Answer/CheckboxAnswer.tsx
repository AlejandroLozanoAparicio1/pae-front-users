import styles from './answer.module.scss';

const CheckboxAnswer: React.FC<PossibleAnswerType> = ({ questionId, option, type }) => {
  return (
    <div className={styles.answerContainer}>
      <input
        className={`${styles.answerCheckbox} ${styles.answerInput}`}
        type={type}
        value={option.optionsId}
        key={option.optionsId}
        name={questionId.toString() + '_' + option.optionsId.toString()}
        id={questionId.toString() + '_' + option.optionsId.toString()}
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

export default CheckboxAnswer;
