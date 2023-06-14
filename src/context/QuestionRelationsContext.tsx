import { ReactElement, createContext, useState } from 'react';

export const QuestionRelationsContext = createContext<QuestionRelationsContextType>({
  questionRelations: {},
  handleQuestionChange: (questionId, value) => {},
});

const QuestionRelationsProvider: React.FC<ContextChildrenType> = ({ children }): ReactElement => {
  const [questionRelations, setQuestionRelations] = useState<{ [k: number]: boolean }>({});

  const handleQuestionChange = (questionId: number, value: boolean = false) => {
    const aux = { ...questionRelations };
    aux[questionId] = value;
    setQuestionRelations(aux);
  };

  return (
    <QuestionRelationsContext.Provider value={{ questionRelations, handleQuestionChange }}>
      {children}
    </QuestionRelationsContext.Provider>
  );
};

export default QuestionRelationsProvider;
