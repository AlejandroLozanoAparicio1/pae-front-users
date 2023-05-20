type QuestionType = {
  questionId: number;
  questionText: string;
  type: 'checkbox' | 'radio' | 'text';
  optionsList: OptionType[];
};

type SimpleQuestion = {
  questionId: number;
  questionText: string;
};

type QAType = {
  question: string;
  answer: string;
};
