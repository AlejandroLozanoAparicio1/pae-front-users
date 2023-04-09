import { useContext, useEffect, useState } from 'react';
import Form from 'react-router-dom';
import { StatsContext } from '../../../context/StatsContext';
import fetchForm from '../../../services/getForm';
import { buildFormAnswers } from '../../../services/helpers/buildFormAnswers';
import statFunctions from '../../../services/helpers/getStats';
import postForm from '../../../services/postForm';
import AnswerCountType from '../../../utils/types/AnswerCountType';
import QAType from '../../../utils/types/QAType';
import QuestionType from '../../../utils/types/QuestionType';
import Question from '../Question/Question';
import styles from './form.module.scss';

const FormCategory: React.FC = () => {
  const [form, setForm] = useState<QuestionType[] | null>(null);
  const [error, setError] = useState('');
  const { setMostSelected, setSelectedCount } = useContext(StatsContext);

  useEffect(() => {
    fetchForm()
      .then((res) => {
        setForm(res);
        setError('');
      })
      .catch((e) => {
        setError('No se ha podido acceder a los servicios.');
      });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const { data, questionData, answerData } = buildFormAnswers(formJson, form);
    postForm(data);

    const mostArray = await statFunctions.getMostSelectedStats(questionData);
    const countArray = await statFunctions.getCountStats(answerData);

    const mostStats: QAType[] = mostArray.map((value, index) => {
      return { question: questionData[index].questionText, answer: value.options };
    });

    const countStats: AnswerCountType[] = countArray.map((value, index) => {
      return { answer: answerData[index], count: value };
    });

    setMostSelected(mostStats);
    setSelectedCount(countStats);
    document.location = 'http://localhost:3000/stats';
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
        {error && <p className={styles.error}>{error}</p>}
        <button type='submit' className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormCategory;
