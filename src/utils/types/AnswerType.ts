export default interface AnswerType {
  questionId: { questionId: number };
  answerId: number;
  answer: string;
  type: string;
}
