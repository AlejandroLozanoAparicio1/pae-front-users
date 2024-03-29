import styles from './answer.module.scss';

const RadioAnswer: React.FC<PossibleAnswer> = ({ questionId, option, type, handleChange }) => {
  return (
    <div className={styles.answerContainer}>
      <input
        className={`styles.answerRadio ${styles.answerInput}`}
        type={type}
        value={option.optionsId}
        key={option.optionsId}
        name={questionId.toString()}
        id={questionId.toString() + '_' + option.optionsId.toString()}
        required
        onChange={handleChange}
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
