import { createContext, useState } from 'react';
import AnswerContextType from '../utils/types/AnswerContextType';
import AnswerType from '../utils/types/AnswerType';

export const AnswersContext = createContext<AnswerContextType | null>(null);

interface ContextChildrenType {
  children: React.ReactNode;
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
