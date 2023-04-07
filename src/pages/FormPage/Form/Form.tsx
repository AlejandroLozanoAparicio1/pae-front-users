import { useEffect, useState } from 'react';
import fetchForm from '../../../services/getForm';
import postForm from '../../../services/postForm';
import AnswerType from '../../../utils/types/AnswerType';
import QuestionType from '../../../utils/types/QuestionType';
import Question from '../Question/Question';
import styles from './form.module.scss';

const Form: React.FC = () => {
  const [form, setForm] = useState<QuestionType[] | null>(null);

  useEffect(() => {
    const getForm = async () => {
      fetchForm().then((res) => {
        setForm(res);
      });
    };
    getForm();
  }, []);

  const buildFormAnswers = (json: any) => {
    const dataObj: AnswerType[] = [];

    Object.keys(json)
      .sort()
      .forEach((key) => {
        const ans = json[key].toString();
        const questionKey = key.split('_')[0];
        const formItem = form?.filter((item) => item.questionId === parseInt(questionKey));

        let type = formItem ? formItem[0].type : '';
        if (!type) {
          type = 'text';
        }

        const answerText = formItem
          ? formItem[0].optionsList.filter((item) => item.optionsId === parseInt(ans))
          : '';

        const row: AnswerType = {
          questionId: { questionId: parseInt(questionKey) },
          answerId: parseInt(ans),
          answer: answerText ? answerText[0].options : '',
          type: type,
        };

        dataObj.push(row);
      });

    return dataObj;
  };

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const data = buildFormAnswers(formJson);
    postForm(data);
  };

  return (
    <div className={styles.formGroup}>
      <form className={styles.form} action='/stats' onSubmit={handleSubmit}>
        {form ? (
          form!.map((item) => (
            <Question
              questionId={item.questionId}
              questionText={item.questionText}
              type={item.type}
              optionsList={item.optionsList}
              key={item.questionId}
            />
          ))
        ) : (
          <div className={styles.loading}>
            <p>Loading...</p>
            <span className={styles.textContainer}></span>
          </div>
        )}
        <button type='submit' className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
