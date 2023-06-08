import { useContext } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { AnswersContext } from '../../../context/AnswersContext';
import { LabelsContext } from '../../../context/LabelsContext';
import Question from '../Question/Question';
import styles from './form_page.module.scss';

const FormPage: React.FC<FormLoader> = ({ form, hasMorePages, page, questionaryName }) => {
  const navigate = useNavigate();
  const { get } = useContext(LabelsContext);
  const { buildFormData } = useContext(AnswersContext);

  const nextPage = hasMorePages ? `/forms/${questionaryName}/${page + 1}` : '/stats';

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    buildFormData(formJson, form);
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
          form!.map((item) => {
            const questionProps = [item];
            return <Question data={questionProps} key={item.questionId} />;
          })
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
