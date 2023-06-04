import { useContext } from 'react';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { AnswersContext } from '../../../context/AnswersContext';
import { LabelsContext } from '../../../context/LabelsContext';
import { StatsContext } from '../../../context/StatsContext';
import postForm from '../../../services/forms/postForm';
import Question from '../Question/Question';
import styles from './form_page.module.scss';

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const { form, hasMorePages, page, questionaryName } = useLoaderData() as FormLoader;
  const { answers, questionStats, answerStats, questIdStats, buildFormData } =
    useContext(AnswersContext);
  const { getMostSelectedStats, getCountStats, getAllCountStats } = useContext(StatsContext);
  const { get } = useContext(LabelsContext);

  const nextPage = hasMorePages ? `/forms/${questionaryName}/${page + 1}` : '/stats';

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    buildFormData(formJson, form);

    if (!hasMorePages) {
      postForm(answers);
      getMostSelectedStats(questionStats);
      getCountStats(answerStats);
      getAllCountStats(questIdStats);
    }
    navigate(
      nextPage,
      // should uncomment but makes testing a pain
      // { replace: true },
    );
  };

  return (
    <div className={styles.formGroup}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        {form ? (
          form!.map((item: any, index: number) => (
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
          {hasMorePages ? (
            <Button
              type='submit'
              text={get('form.nextButton')}
              disabled={!hasMorePages}
              secondary
            />
          ) : (
            <Button type='submit' text={get('form.submitButton')} disabled={hasMorePages} />
          )}
        </div>
      </Form>
    </div>
  );
};

export default FormPage;
