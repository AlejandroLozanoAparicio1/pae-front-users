type AnswerType = {
  options: { optionsId: number };
  answerId: number;
  answer: string;
  type: string;
};

type SimpleAnswerType = {
  answerId: number;
  answerText: string;
};

type OptionType = {
  optionsId: number;
  options: string;
};

type PossibleAnswerType = {
  questionId: number;
  type: 'checkbox' | 'radio' | 'text';
  option: OptionType;
};
