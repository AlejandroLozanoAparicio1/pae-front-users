import { useContext, useState } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import styles from './answer.module.scss';

const TextAnswer: React.FC<PossibleAnswerType> = (props) => {
  const useAnswersContext = useContext(AnswersContext);
  const [answerText, setAnswerText] = useState('');

  const handleAnswer = (e: any) => {
    const question_id = props.question_id.toString();
    const answer_id = props.answer.answer_id.toString();
    const aux = useAnswersContext
      ? useAnswersContext?.answers.slice(0, useAnswersContext?.answers.length)
      : [];

    let isInside = false;
    for (let j = 0; j < aux.length; j++) {
      if (question_id === aux[j].questionId) {
        aux[j].answerId = answer_id;
        aux[j].answerText = e.target.value;
        isInside = true;
      }
    }
    if (!isInside) {
      aux.push({
        questionId: question_id,
        answerId: answer_id,
        answerText: answerText,
      });
    }
    useAnswersContext?.setAnswers(aux);
  };

  return (
    <div className={styles.answer_container}>
      <label className={styles.answer_label}>
        <input
          className={styles.answer_input}
          type='radio'
          value={answerText}
          key={props.answer.answer_id}
          onClick={handleAnswer}
          name={props.question_id.toString()}
          id={props.question_id.toString() + '_' + props.answer.answer_id.toString()}
        />
        {props.answer.answer}
      </label>
      <input
        className={styles.answer_text}
        type={props.answer.answer_type}
        key={'text_' + props.answer.answer_id}
        // name={'text_' + props.question_id.toString()}
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        id={props.question_id.toString() + '_' + props.answer.answer_id.toString()}
      />
    </div>
  );
};

export default TextAnswer;
