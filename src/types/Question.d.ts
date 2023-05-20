type SimpleQuestion = {
  questionId: number;
  questionText: string;
};

type QuestionType = SimpleQuestion & {
  type: 'checkbox' | 'radio' | 'text';
  optionsList: OptionType[];
};
