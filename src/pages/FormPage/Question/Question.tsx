import QuestionType from '../../../utils/types/QuestionType';
import Answer from '../Answer/Answer';
import styles from './question.module.scss';

const Question: React.FC<QuestionType> = (props) => {
  return (
    <div className={styles.form}>
      <h3 className={styles._question}>{props.question_name}</h3>
      {props.answers.map((answer) => (
        <Answer
          answer_id={answer.answer_id}
          answer_type={answer.answer_type}
          answer={answer.answer}
          key={props.question_id + '_' + answer.answer_id}
        />
      ))}
    </div>
  );
};

export default Question;
