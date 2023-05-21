import { ReactElement, createContext, useState } from 'react';

const init = {
  answers: [],
  setAnswers: () => {},
  questionStats: [],
  setQuestionStats: () => {},
  answerStats: [],
  setAnswerStats: () => {},
  buildFormData: (json: { [k: string]: FormDataEntryValue }, form: QuestionType[]) => {},
};

export const AnswersContext = createContext<AnswerContextType>(init);

const AnswersProvider: React.FC<ContextChildrenType> = ({ children }: any): ReactElement => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [questionStats, setQuestionStats] = useState<SimpleQuestion[]>([]);
  const [answerStats, setAnswerStats] = useState<string[]>([]);

  const buildFormData = (json: { [k: string]: FormDataEntryValue }, form: QuestionType[]) => {
    const data: Answer[] = [];
    const questionArray: SimpleQuestion[] = [];
    const answerArray: string[] = [];

    Object.keys(json)
      .sort()
      .forEach((key) => {
        const ans = parseInt(json[key].toString());
        const [questionKey] = key.split('_');
        const formItem = form.filter((item) => item.questionId === parseInt(questionKey));

        let type = formItem ? formItem[0].type : '';
        if (!type) {
          type = 'text';
        }

        const answerObj = formItem
          ? formItem[0].optionsList.filter((item) => item.optionsId === ans)
          : '';

        const optionId = answerObj ? answerObj[0].optionsId : -1;
        const optionsText = answerObj ? answerObj[0].options : '';

        const row: Answer = {
          options: { optionsId: optionId },
          answerId: ans,
          answer: optionsText,
          type: type,
        };

        data.push(row);
        answerArray.push(optionsText);
        questionArray.push({
          questionId: parseInt(questionKey),
          questionText: formItem ? formItem[0].questionText : '',
        });
      });

    const questionData = [...new Set(questionArray)];
    const answerData = [...new Set(answerArray)];

    setAnswers(answers.concat(data));
    setQuestionStats(questionStats.concat(questionData));
    setAnswerStats(answerStats.concat(answerData));
  };

  return (
    <AnswersContext.Provider
      value={{
        answers: answers,
        questionStats: questionStats,
        answerStats: answerStats,
        buildFormData: buildFormData,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

export default AnswersProvider;

/*
const handleAnswerRadio = (e: any) => {
    const questionIdStr = questionId.toString();
    const answerId = option.optionsId.toString();
    const aux = useAnswersContext
      ? useAnswersContext?.answers.slice(0, useAnswersContext?.answers.length)
      : [];

    let isInside = false;
    for (let j = 0; j < aux.length; j++) {
      if (questionIdStr === aux[j].questionId) {
        aux[j].answerId = answerId;
        aux[j].answerText = e.target.value;
        isInside = true;
      }
    }
    if (!isInside) {
      aux.push({ questionId: questionIdStr, answerId: answerId });
    }
    useAnswersContext?.setAnswers(aux);
  };
*/

/* 
const handleAnswerText = (e: any) => {
    const question_id = questionId.toString();
    const answer_id = option.optionsId.toString();
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
*/

/*

*/
