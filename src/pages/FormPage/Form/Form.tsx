import FormType from '../../../utils/types/FormType';
import PossibleAnswer from '../PossibleAnswer/PossibleAnswer';
import styles from './form.module.scss';

const Form: React.FC<FormType> = (props) => {
  return (
    <div className={styles.form}>
      <h3 className={styles._question}>{props.form.question}</h3>
      {props.form.possibleAnswers.map((answer) => (
        <PossibleAnswer
          id={props.form.id}
          question={props.form.question}
          possibleAnswer={answer}
          key={props.form.id + '_' + answer}
        />
      ))}
    </div>
  );
};

export default Form;
