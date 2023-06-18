import { useContext, useMemo, useState } from 'react';
import { LabelsContext } from '../../../context/LabelsContext';
import Answer from '../Answer/Answer';
import TextAnswer from '../Answer/TextAnswer';
import styles from './question.module.scss';

const Question: React.FC<{
  data: QuestionResponse[];
}> = ({ data }) => {
  const { lang } = useContext(LabelsContext);
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

  const getTranslation = (question: QuestionResponse) => {
    const { traduccion } = question;
    const catTranslation =
      traduccion[0].idioma === 'cat' ? traduccion[0].traduccion : traduccion[1].traduccion;
    const enTranslation =
      traduccion[0].idioma === 'en' ? traduccion[0].traduccion : traduccion[1].traduccion;

    switch (lang) {
      case 'es':
        return question.questionText;
      case 'en':
        return enTranslation;
      case 'cat':
        return catTranslation;
    }
  };

  const renderQuestion = (question: QuestionResponse): JSX.Element => {
    const { questionId, type, optionsList } = question;
    return (
      <div className={styles.form}>
        <h3 className={styles.question}>{getTranslation(question)}</h3>
        {optionsList.map((answer) => {
          return (
            <Answer
              questionId={questionId}
              type={type}
              option={answer}
              key={questionId + '_' + answer.optionsId}
              answers={answers}
              setAnswers={setAnswers}
              otherAnswers={otherAnswers(optionsList)}
            />
          );
        })}
        {type === 'text' && (
          <TextAnswer
            questionId={questionId}
            type={type}
            option={{
              optionsId: -1,
              options: '',
              traduccion: [
                { traduccion: '', idioma: 'en' },
                { traduccion: '', idioma: 'cat' },
              ],
            }}
            radio={false}
            key={questionId + '_text'}
          />
        )}
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
