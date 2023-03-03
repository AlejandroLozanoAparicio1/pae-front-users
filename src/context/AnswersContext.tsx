import { createContext, useState } from 'react';
import AnswerContextType from '../utils/types/AnswerContextType';
import AnswerType from '../utils/types/AnswerType';

export const AnswersContext = createContext<AnswerContextType | null>(null);

interface ContextChildrenType {
  children: React.ReactNode;
}

const AnswersProvider: React.FC<ContextChildrenType> = ({ children }: any) => {
  const [answers, setAnswers] = useState<AnswerType[]>([
    {
      questionId: '0',
      answerId: '',
    },
    {
      questionId: '1',
      answerId: '',
    },
    {
      questionId: '2',
      answerId: '',
    },
    {
      questionId: '3',
      answerId: '',
    },
  ]);

  function handleAnswer(e: any) {
    const aux = answers.slice(0, answers.length);
    aux[parseInt(e.target.id[0]) - 1] = { questionId: e.target.id[0], answerId: e.target.value };
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
