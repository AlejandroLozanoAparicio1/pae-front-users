import { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { StatsContext } from '../../../context/StatsContext';
import { buildFormAnswers } from '../../../services/helpers/buildFormAnswers';
import statFunctions from '../../../services/helpers/getStats';
import postForm from '../../../services/postForm';
import AnswerCountType from '../../../utils/types/AnswerCountType';
import QAType from '../../../utils/types/QAType';
import QuestionType from '../../../utils/types/QuestionType';
import Question from '../Question/Question';
import styles from './form_page.module.scss';

function unknownToQuestionType(obj: any[]): QuestionType[] {
  return obj.map((item) => {
    return {
      questionId: item.questionId,
      questionText: item.questionText,
      type: item.type,
      optionsList: item.optionsList,
    };
  });
}

const FormPage: React.FC = () => {
  const { setMostSelected, setSelectedCount } = useContext(StatsContext);
  const { initData, hasMorePages, page } = useLoaderData() as any;
  const form = unknownToQuestionType(initData as any[]);

  const handleSubmit = async (e: any) => {
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
  };

  return (
    <div className={styles.formGroup}>
      <Form className={styles.form} action='/stats' onSubmit={handleSubmit}>
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
        {page > 0 && <Button text='Prev' link={`/form/${page - 1}`} />}
        {hasMorePages ? (
          <Button text='Next' link={`/form/${page + 1}`} />
        ) : (
          <Button type='submit' text='Submit' />
        )}
      </Form>
    </div>
  );
};

export default FormPage;
