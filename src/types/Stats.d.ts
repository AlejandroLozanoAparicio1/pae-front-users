type AnswerCount = {
  answer: string;
  count: number;
};

type MostAnswered = {
  question: string;
  answer: string;
};

type QuestionCounts = {
  question: string;
  answers: string[];
  counts: { angle: number }[];
};
