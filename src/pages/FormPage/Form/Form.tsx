import { useContext, useEffect, useState } from 'react';
import { AnswersContext } from '../../../context/AnswersContext';
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

  const useAnswersContext = useContext(AnswersContext);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: any) {
    if (form?.length === useAnswersContext?.answers.length) {
      useAnswersContext?.answers
        ? postForm({ answers: useAnswersContext?.answers })
        : setError('Could not post results to server.');
    } else {
      e.preventDefault();
      setError('Tienes que responder todas las preguntas antes de terminar el questionario!');
      setTimeout(() => setError(''), 5000);
    }
    e.preventDefault();
    const forma = e.target;
    const formData = new FormData(forma);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div className={styles.form_group}>
      <form className={styles._form} action='/stats' onSubmit={handleSubmit}>
        {form ? (
          form!.map((item) => (
            <Question
              questionary_id={item.questionary_id}
              question_id={item.question_id}
              question_name={item.question_name}
              answers={item.answers}
              key={item.question_id}
            />
          ))
        ) : (
          <div className={styles._loading}>
            <p>Loading...</p>
            <span className={styles._text_container}></span>
          </div>
        )}
        {/*<div className={styles._button_error_container}>
          <a type='submit' onClick={handleSubmit} className={styles._link_button} href={'/stats'}>
            submit
          </a>
          {error !== '' && <p className={styles._error}>{error}</p>}
        </div>*/}
        <button type='submit' className={styles._button}>
          submit
        </button>
        {error !== '' && <p className={styles._error}>{error}</p>}
      </form>
    </div>
  );
};

export default Form;
