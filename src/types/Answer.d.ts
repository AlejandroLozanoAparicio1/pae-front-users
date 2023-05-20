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

type PossibleAnswerType = {
  questionId: number;
  option: OptionType;
  type: 'checkbox' | 'radio' | 'text';
};

type AnswerCountType = {
  answer: string;
  count: number;
};

type OptionType = {
  optionsId: number;
  options: string;
};
