import OptionType from './OptionType';

export default interface QuestionType {
  questionId: number;
  questionText: string;
  type: 'checkbox' | 'radio' | 'text';
  optionsList: OptionType[];
}
