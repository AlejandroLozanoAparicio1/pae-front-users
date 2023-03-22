import AnswerType from './AnswerType';

export default interface AnswerContextType {
  answers: AnswerType[];
  setAnswers: (SetStateAction: any) => void;
}
