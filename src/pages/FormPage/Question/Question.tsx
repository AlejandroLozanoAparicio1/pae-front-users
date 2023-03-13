import QuestionType from '../../../utils/types/QuestionType';
import Answer from '../Answer/Answer';
import styles from './question.module.scss';

const Question: React.FC<QuestionType> = (props) => {
  return (
    <div className={styles.form}>
      <h3 className={styles._question}>{props.question_name}</h3>
      {props.answers.map((answer) => (
        <Answer
          answer={answer}
          question_id={props.question_id}
          key={props.question_id + '_' + answer.answer_id}
        />
      ))}
    </div>
  );
};

export default Question;
