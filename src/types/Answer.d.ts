type Answer = {
  options: { optionsId: number };
  answerId: number;
  answer: string;
  type: string;
};

type SimpleAnswer = {
  answerId: number;
  answerText: string;
};

type Option = {
  optionsId: number;
  options: string;
  traduccion: { traduccion: string; idioma: string }[];
};

type PossibleAnswer = {
  questionId: number;
  type: 'checkbox' | 'radio' | 'text';
  option: Option;
  handleChange?: (value: any) => void;
};
