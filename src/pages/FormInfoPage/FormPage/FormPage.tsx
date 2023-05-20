import { useContext } from 'react';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { StatsContext } from '../../../context/StatsContext';
import { buildFormAnswers } from '../../../services/forms/buildFormAnswers';
import postForm from '../../../services/forms/postForm';
import statFunctions from '../../../services/stats/getStats';
import Question from '../Question/Question';
import styles from './form_page.module.scss';

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const { setMostSelected, setSelectedCount } = useContext(StatsContext);
  const { form, hasMorePages, page, questionaryName } = useLoaderData() as FormLoader;
  const nextPage = hasMorePages ? `/forms/${questionaryName}/${page + 1}` : '/stats';

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const { data, questionData, answerData } = buildFormAnswers(formJson, form);

    // adding data to end result of form

    if (!hasMorePages) {
      postForm(data);

      const mostArray = await statFunctions.getMostSelectedStats(questionData);
      const countArray = await statFunctions.getCountStats(answerData);

      const mostStats: MostAnswered[] = mostArray.map((value, index) => {
        return { question: questionData[index].questionText, answer: value.options };
      });

      const countStats: AnswerCount[] = countArray.map((value, index) => {
        return { answer: answerData[index], count: value };
      });

      setMostSelected(mostStats);
      setSelectedCount(countStats);
    }
    navigate(nextPage);
  };

  return (
    <div className={styles.formGroup}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        {form ? (
          form!.map((item: any) => (
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
        <div className={styles.pageButtons}>
          {/* the diabled conditions should be revised 'cause these don't make much sense */}
          {hasMorePages ? (
            <Button type='submit' text='Siguiente' disabled={!hasMorePages} secondary />
          ) : (
            <Button type='submit' text='Submit' disabled={hasMorePages} />
          )}
        </div>
      </Form>
    </div>
  );
};

export default FormPage;
