import { useEffect, useState } from 'react';
import fetchForm from '../../../services/getForm';
import postForm from '../../../services/postForm';
import AnswerType from '../../../utils/types/AnswerType';
import PostFormType from '../../../utils/types/PostFormType';
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

  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    const dataObj: PostFormType = { answers: [] };

    Object.keys(formJson)
      .sort()
      .forEach((key) => {
        const ans = formJson[key].toString();
        const questionKey = key[0];
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
        // !dataObj[questionKey]
        // ? {
        //     questionId: parseInt(questionKey),
        //     answerId: dataObj[questionKey].value, + ',' + ans,
        //     answer: answerText ? answerText[0].options : '',
        //     type: type,
        //   }
        // :

        dataObj.answers.push(row);
      });

    console.log(dataObj);
    postForm(dataObj);
  }

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
        <button
          type='submit'
          className={styles.button}
          onClick={() => {
            setTimeout(
              () => setError('Tienes que rellenar todos los campos antes de continuar!'),
              500,
            );
            setTimeout(() => setError(''), 5000);
          }}
        >
          Submit
        </button>
        {error !== '' && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Form;
