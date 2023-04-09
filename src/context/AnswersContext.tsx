import { createContext, useState } from 'react';
import AnswerType from '../utils/types/AnswerType';

export const AnswersContext = createContext<AnswerContextType | null>(null);

interface ContextChildrenType {
  children: React.ReactNode;
}

interface AnswerContextType {
  answers: AnswerType[];
  setAnswers: (SetStateAction: any) => void;
}

const AnswersProvider: React.FC<ContextChildrenType> = ({ children }: any) => {
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  return (
    <AnswersContext.Provider value={{ answers: answers, setAnswers: setAnswers }}>
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
