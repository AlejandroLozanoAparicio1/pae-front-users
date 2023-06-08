import { useState } from 'react';
import CheckboxAnswer from './CheckboxAnswer';
import RadioAnswer from './RadioAnswer';
import TextAnswer from './TextAnswer';
import styles from './answer.module.scss';

const Answer: React.FC<PossibleAnswer> = ({ questionId, type, option }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChange = (e: any) => {
    const value = e.target.checked;
    setIsChecked(value);
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

  return (
    <>
      {renderAnswer(option)}
      {option.optionsList && isChecked && (
        <div className={styles.revealedOpt}>
          {option.optionsList.map((revealedOpt) => renderAnswer(revealedOpt))}
        </div>
      )}
    </>
  );
};

export default Answer;
