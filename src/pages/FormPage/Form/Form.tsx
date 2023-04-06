import { useEffect, useState } from 'react';
import fetchForm from '../../../services/getForm';
import postForm from '../../../services/postForm';
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

    const dataObj: any = {};

    Object.keys(formJson)
      .sort()
      .forEach((key) => {
        const ans = formJson[key];
        const questionKey = key[0];
        const formItem = form?.filter((item) => item.questionId === parseInt(questionKey));
        let type = formItem ? formItem[0].type : '';
        if (!type) {
          type = 'text';
        }

        dataObj[questionKey] = dataObj[questionKey]
          ? {
              value: dataObj[questionKey].value + ',' + ans,
              type: type,
            }
          : {
              value: ans,
              type: type,
            };
      });

    console.log(dataObj);
    postForm(dataObj);
  }

  return (
    <div className={styles.form_group}>
      <form className={styles._form} action='/stats' onSubmit={handleSubmit}>
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
          <div className={styles._loading}>
            <p>Loading...</p>
            <span className={styles._text_container}></span>
          </div>
        )}
        <button
          type='submit'
          className={styles._button}
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
        {error !== '' && <p className={styles._error}>{error}</p>}
      </form>
    </div>
  );
};

export default Form;
