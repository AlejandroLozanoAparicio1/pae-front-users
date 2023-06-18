type SimpleQuestion = {
  questionId: number;
  questionText: string;
};

type QuestionResponse = SimpleQuestion & {
  type: 'checkbox' | 'radio' | 'text';
  optionsList: Option[];
  page: number;
  compulsory: boolean | null;
  traduccion: { traduccion: string; idioma: string }[];
  answerRelateds: {
    id: number;
    answer: string;
    questionsRelated: QuestionResponse[];
  }[];
};
