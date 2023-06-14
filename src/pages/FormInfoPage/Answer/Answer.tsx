import CheckboxAnswer from './CheckboxAnswer';
import RadioAnswer from './RadioAnswer';
import TextAnswer from './TextAnswer';
import styles from './answer.module.scss';

const Answer: React.FC<
  PossibleAnswer & {
    answers: { [k: string]: boolean };
    setAnswers: (value: { [k: string]: boolean }) => void;
  }
> = ({ questionId, type, option, answers, setAnswers }) => {
  const handleChange = (e: any) => {
    const value = e.target.checked;
    const answersCopy = { ...answers };
    answersCopy[option.options] = value;
    setAnswers(answersCopy);
  };

  const renderAnswer = (currentOption: Option) => {
    switch (type) {
      case 'checkbox':
        return (
          <CheckboxAnswer
            option={currentOption}
            questionId={questionId}
            type={type}
            handleChange={handleChange}
          />
        );
      case 'radio':
        return (
          <RadioAnswer
            option={currentOption}
            questionId={questionId}
            type={type}
            handleChange={handleChange}
          />
        );
      case 'text':
        return (
          <TextAnswer
            option={currentOption}
            questionId={questionId}
            type={type}
            handleChange={handleChange}
          />
        );
    }
  };

  return <>{renderAnswer(option)}</>;
};

export default Answer;
