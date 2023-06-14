import { useMemo, useState } from 'react';
import Answer from '../Answer/Answer';
import styles from './question.module.scss';

const Question: React.FC<{
  data: QuestionResponse[];
}> = ({ data }) => {
  const fillFirstAnswers = () =>
    data.reduce((accumulator: any, current) => {
      if (current.answerRelateds.length > 0) {
        current.optionsList.forEach(({ options }) => {
          if (current.answerRelateds.some(({ answer }) => answer === options)) {
            accumulator[options] = false;
          }
        });
      }
      return accumulator;
    }, {});

  const [answers, setAnswers] = useState<{ [k: string]: boolean }>(fillFirstAnswers());

  const questionRelations: {
    [k: string]: { shouldRender: boolean; questions: QuestionResponse[] };
  } = useMemo(() => {
    return data.reduce((accumulator: any, { answerRelateds }) => {
      answerRelateds.forEach(({ answer, questionsRelated }) => {
        const currentQuestions = {
          shouldRender: answers[answer],
          questions: questionsRelated,
        };
        accumulator[answer] = currentQuestions;
      });
      return accumulator;
    }, {});
  }, [data, answers]);

  const otherAnswers = (optionsList: Option[]): string[] =>
    optionsList.map(({ options }) => options);

  const renderQuestion = ({
    questionId,
    questionText,
    type,
    optionsList,
  }: QuestionResponse): JSX.Element => {
    return (
      <div
        // style={{ paddingLeft: '20px' }}
        className={styles.form}
      >
        <h3 className={styles.question}>{questionText}</h3>
        {optionsList.map((answer) => (
          <Answer
            questionId={questionId}
            type={type}
            option={answer}
            key={questionId + '_' + answer.optionsId}
            answers={answers}
            setAnswers={setAnswers}
            otherAnswers={otherAnswers(optionsList)}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {data.map((question) => {
        return (
          <>
            {renderQuestion(question)}
            {question.answerRelateds.map(
              (object) =>
                questionRelations[object.answer] &&
                questionRelations[object.answer].shouldRender && (
                  <Question data={questionRelations[object.answer].questions} />
                ),
            )}
          </>
        );
      })}
    </>
  );
};

export default Question;
