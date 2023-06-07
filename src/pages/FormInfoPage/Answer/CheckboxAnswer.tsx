import styles from './answer.module.scss';
import checkbox from './checkbox.module.scss';

const CheckboxAnswer: React.FC<PossibleAnswer> = ({ questionId, option, type, handleChange }) => {
  return (
    <div className={`${styles.answerContainer} ${checkbox.checkbox}`}>
      <input
        type={type}
        value={option.optionsId}
        key={option.optionsId}
        name={questionId.toString() + '_' + option.optionsId.toString()}
        id={questionId.toString() + '_' + option.optionsId.toString()}
        className={checkbox.checkboxFlip}
        onChange={handleChange}
      />
      <label htmlFor={questionId.toString() + '_' + option.optionsId.toString()}>
        <span></span>
        {option.options}
      </label>
    </div>
  );
};

export default CheckboxAnswer;
