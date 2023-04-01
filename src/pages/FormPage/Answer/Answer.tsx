import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import CheckboxAnswer from './CheckboxAnswer';
import RadioAnswer from './RadioAnswer';
import TextAnswer from './TextAnswer';

const Answer: React.FC<PossibleAnswerType> = (props) => {
  return (
    <>
      {props.answer.answer_type === 'radio' && (
        <RadioAnswer answer={props.answer} question_id={props.question_id} />
      )}
      {props.answer.answer_type === 'text' && (
        <TextAnswer answer={props.answer} question_id={props.question_id} />
      )}
      {props.answer.answer_type === 'checkbox' && (
        <CheckboxAnswer answer={props.answer} question_id={props.question_id} />
      )}
    </>
  );
};

export default Answer;

/*
return (
    <div className={styles.possible_answer_container}>
      {props.answer.answer_type === 'radio' ? (
        <>
          <input
            className={styles.possible_answer_input}
            type={props.answer.answer_type}
            value={props.answer.answer}
            key={props.answer.answer_id}
            onClick={useAnswersContext?.handleAnswer}
            name={props.question_id.toString()}
            id={props.question_id.toString() + '_' + props.answer.answer_id.toString()}
          />
          <label className={styles.possible_answer_label}>{props.answer.answer}</label>
        </>
      ) : props.answer.answer_type === 'text' ? (
        <>
          <input
            className={styles.possible_answer_input}
            type='radio'
            value={props.answer.answer}
            key={props.answer.answer_id}
            onClick={useAnswersContext?.handleAnswer}
            name={props.question_id.toString()}
            id={props.question_id.toString() + '_' + props.answer.answer_id.toString()}
          />
          <label className={styles.possible_answer_label}>{props.answer.answer}</label>
          <input
            className={styles.possible_answer_input}
            type={props.answer.answer_type}
            key={props.answer.answer_id}
            onClick={useAnswersContext?.handleAnswer}
            name={props.question_id.toString()}
            id={props.question_id.toString() + '_' + props.answer.answer_id.toString()}
          />
        </>
      ) : null}
    </div>
  );
*/
