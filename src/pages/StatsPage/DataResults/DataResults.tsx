import AnswerType from '../../../utils/types/AnswerType';
import styles from './data_results.module.scss';

const DataResults: React.FC<AnswerType> = (props) => {
  return (
    <p className={styles.answer}>
      <span className={styles.question}>Pregunta {props.questionId}: </span>
      <span className={styles.answer}>{props.answerText}</span>
    </p>
  );
};

export default DataResults;
