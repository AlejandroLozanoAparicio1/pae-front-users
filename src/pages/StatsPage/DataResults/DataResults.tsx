import AnswerType from '../../../utils/types/AnswerType';
import styles from './data_results.module.scss';

interface a {
  answer: AnswerType;
}

const DataResults: React.FC<a> = (props) => {
  return (
    <p className={styles.answer}>
      <span className={styles._question}>Pregunta {props.answer.questionId}: </span>
      <span className={styles._answer}>{props.answer.answerId}</span>
    </p>
  );
};

export default DataResults;
