import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    useAnswersContext?.answers
      ? postForm({ answers: useAnswersContext?.answers })
      : setError('Could not post results to server.');
  }

  return (
    <div className={styles.form_group}>
      <form className={styles._form} action='/stats'>
        {form &&
          form!.map((item) => (
            <Question
              questionary_id={item.questionary_id}
              question_id={item.question_id}
              question_name={item.question_name}
              answers={item.answers}
              key={item.questionary_id}
            />
          ))}
        {error}
        <Link type='submit' onClick={handleSubmit} className={styles._link_button} to={'/stats'}>
          submit
        </Link>
        {/* <button type='submit' onClick={handleSubmit} className={styles._button}>
          submit
        </button> */}
      </form>
    </div>
  );
};

export default Form;
