import OptionType from './OptionType';

export default interface PossibleAnswerType {
  questionId: number;
  option: OptionType;
  type: 'checkbox' | 'radio' | 'text';
}
