import { useState } from 'react';
import Answer from '../Answer/Answer';
import styles from './question.module.scss';

const Question: React.FC<{ data: QuestionResponse[] }> = ({ data }) => {
  const [questionRelations, setQuestionRelations] = useState<{ [k: number]: boolean }>({});
  const renderQuestion = ({
    questionId,
    questionText,
    type,
    optionsList,
  }: QuestionResponse): JSX.Element => {
    return (
      <div style={{ paddingLeft: '20px' }} className={styles.form}>
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

  const newQuest = (questionId: number) => {
    const aux = { ...questionRelations };
    aux[questionId] = false;
    setQuestionRelations(aux);
  };

  return (
    <>
      {data.map((question) => {
        return (
          <>
            {renderQuestion(question)}
            {question.questionsRelated && questionRelations[question.questionId] ? (
              <Question data={question.questionsRelated} />
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default Question;
