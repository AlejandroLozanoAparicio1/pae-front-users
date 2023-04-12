import PossibleAnswerType from '../../../utils/types/PossibleAnswerType';
import CheckboxAnswer from './CheckboxAnswer';
import RadioAnswer from './RadioAnswer';
import TextAnswer from './TextAnswer';

const Answer: React.FC<PossibleAnswerType> = ({ questionId, option, type }) => {
  return (
    <>
      {type === 'radio' && <RadioAnswer option={option} questionId={questionId} type={type} />}
      {type === 'text' && <TextAnswer option={option} questionId={questionId} type={type} />}
      {type === 'checkbox' && (
        <CheckboxAnswer option={option} questionId={questionId} type={type} />
      )}
    </>
  );
};

export default Answer;
