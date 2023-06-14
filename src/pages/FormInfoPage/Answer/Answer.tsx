import CheckboxAnswer from './CheckboxAnswer';
import RadioAnswer from './RadioAnswer';
import TextAnswer from './TextAnswer';

const Answer: React.FC<
  PossibleAnswer & {
    answers: { [k: string]: boolean };
    setAnswers: (value: { [k: string]: boolean }) => void;
    otherAnswers: string[];
  }
> = ({ questionId, type, option, answers, setAnswers, otherAnswers }) => {
  const handleChange = (e: any) => {
    const value = e.target.checked;
    const answersCopy = { ...answers };
    answersCopy[option.options] = value;
    setAnswers(answersCopy);
  };

  const handleChangeRadio = (e: any) => {
    if (answers[option.options] === undefined) {
      otherAnswers.forEach((element) => {
        if (answers[element]) {
          const answersCopy = { ...answers };
          answersCopy[element] = !answersCopy[element];
          setAnswers(answersCopy);
        }
      });
    } else {
      const value = e.target.checked;
      const answersCopy = { ...answers };
      answersCopy[option.options] = value;
      setAnswers(answersCopy);
    }
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
            handleChange={handleChangeRadio}
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
