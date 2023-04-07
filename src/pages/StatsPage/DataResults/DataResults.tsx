import AnswerType from '../../../utils/types/AnswerType';
import styles from './data_results.module.scss';

const DataResults: React.FC<AnswerType> = (props) => {
  return (
    <p className={styles.answer}>
      <span className={styles.question}>Pregunta {props.questionId.questionId}: </span>
      <span className={styles.answer}>{props.answer}</span>
    </p>
  );
};

export default DataResults;
