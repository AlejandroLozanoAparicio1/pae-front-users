type SimpleQuestion = {
  questionId: number;
  questionText: string;
};

type QuestionType = SimpleQuestion & {
  type: 'checkbox' | 'radio' | 'text';
  optionsList: Option[];
};
type QuestionResponse = QuestionType & { page: number; compulsory: boolean | null };
