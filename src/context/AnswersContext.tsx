import { createContext, useState } from 'react';
import AnswerContextType from '../utils/types/AnswerContextType';
import AnswerType from '../utils/types/AnswerType';

export const AnswersContext = createContext<AnswerContextType | null>(null);

interface ContextChildrenType {
  children: React.ReactNode;
}

const AnswersProvider: React.FC<ContextChildrenType> = ({ children }: any) => {
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  function handleAnswer(e: any) {
    const aux = answers.slice(0, answers.length);
    let question_id = '';
    let answer_id = '';
    let found = false;

    for (let i = 0; i < e.target.id.length; i++) {
      if (!found) {
        if (e.target.id[i] === '_') found = true;
        else question_id += e.target.id[i];
      } else {
        answer_id += e.target.id[i];
      }
    }

    let isInside = false;
    for (let j = 0; j < aux.length; j++) {
      if (question_id === aux[j].questionId) {
        aux[j].answerId = answer_id;
        aux[j].answerText = e.target.value;
        isInside = true;
      }
    }
    if (!isInside) {
      aux.push({ questionId: question_id, answerId: answer_id, answerText: e.target.value });
    }
    setAnswers(aux);
  }

  return (
    <AnswersContext.Provider
      value={{ answers: answers, setAnswers: setAnswers, handleAnswer: handleAnswer }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

export default AnswersProvider;
