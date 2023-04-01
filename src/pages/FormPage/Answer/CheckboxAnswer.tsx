import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './answer.module.scss';

const CheckboxAnswer: React.FC<PossibleAnswerType> = ({ answer, question_id }) => {
  return (
    <div className={styles.answer_container}>
      <label className={styles.answer_label}>
        <input
          className={styles.answer_checkbox}
          type={answer.answer_type}
          value={answer.answer_id}
          key={answer.answer_id}
          name={question_id.toString()}
          id={question_id.toString() + '_' + answer.answer_id.toString()}
        />
        <span className={styles.answer_text_span}>{answer.answer}</span>
      </label>
    </div>
  );
};

export default CheckboxAnswer;
