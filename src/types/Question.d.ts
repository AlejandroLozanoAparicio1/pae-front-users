type SimpleQuestion = {
  questionId: number;
  questionText: string;
};

type QuestionResponse = SimpleQuestion & {
  type: 'checkbox' | 'radio' | 'text';
  optionsList: Option[];
  page: number;
  compulsory: boolean | null;
  answerRelateds: {
    id: number;
    answer: string;
    questionsRelated: QuestionResponse[];
  }[];
};
