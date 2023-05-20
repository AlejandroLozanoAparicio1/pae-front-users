import Answer from '../Answer/Answer';
import styles from './question.module.scss';

const Question: React.FC<QuestionType> = ({ questionId, questionText, type, optionsList }) => {
  return (
    <div className={styles.form}>
      <h3 className={styles.question}>{questionText}</h3>
      {optionsList.map((answer) => (
        <Answer
          option={answer}
          questionId={questionId}
          type={type}
          key={questionId + '_' + answer.optionsId}
        />
      ))}
    </div>
  );
};

export default Question;
