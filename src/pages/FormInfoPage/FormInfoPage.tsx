import { useLoaderData } from 'react-router-dom';
import InfoPage from '../InfoPage/InfoPage';
import styles from './FormInfoPage.module.scss';
import FormPage from './FormPage/FormPage';

const FormInfoPage: React.FC = () => {
  console.log('aaa');
  const { form, hasMorePages, page, questionaryName } = useLoaderData() as FormLoader;

  /* condition for form or info page */
  const isInfo = false;

  return (
    <>
      <div className={styles.formInfoPageContainer}>
        {isInfo ? (
          <InfoPage />
        ) : (
          <FormPage
            form={form}
            hasMorePages={hasMorePages}
            page={page}
            questionaryName={questionaryName}
          />
        )}
      </div>
    </>
  );
};

export default FormInfoPage;
