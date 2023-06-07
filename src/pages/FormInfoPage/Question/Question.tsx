import Answer from '../Answer/Answer';
import styles from './question.module.scss';

const Question: React.FC<QuestionType> = ({ questionId, questionText, type, optionsList }) => {
  return (
    <div className={styles.form}>
      <h3 className={styles.question}>{questionText}</h3>
      {optionsList.map((answer) => (
        <Answer
          questionId={questionId}
          type={type}
          option={answer}
          key={questionId + '_' + answer.optionsId}
        />
      ))}
    </div>
  );
};

export default Question;
