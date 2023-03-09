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
    {
      questionId: '4',
      answerId: '',
    },
    {
      questionId: '5',
      answerId: '',
    },
    {
      questionId: '6',
      answerId: '',
    },
    {
      questionId: '7',
      answerId: '',
    },
    {
      questionId: '8',
      answerId: '',
    },
    {
      questionId: '9',
      answerId: '',
    },
    {
      questionId: '10',
      answerId: '',
    },
    {
      questionId: '11',
      answerId: '',
    },
    {
      questionId: '12',
      answerId: '',
    },
    {
      questionId: '13',
      answerId: '',
    },
  ]);

  function handleAnswer(e: any) {
    const aux = answers.slice(0, answers.length);
    aux[parseInt(e.target.id[0])] = { questionId: e.target.id[0], answerId: e.target.value };
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
