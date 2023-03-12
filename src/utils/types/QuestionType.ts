import GetAnswerType from './GetAnswerType';

export default interface QuestionType {
  questionary_id: number;
  question_id: number;
  question_name: string;
  answers: GetAnswerType[];
}
