import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnswersContext } from '../../../context/AnswersContext';
import getForms from '../../../services/getForms';
import postForm from '../../../services/postForm';
import FormGroupType from '../../../utils/types/FormGroupType';
import Form from '../Form/Form';
import styles from './form_group.module.scss';

const FormGroup: React.FC = () => {
  const forms: FormGroupType = getForms();
  const useAnswersContext = useContext(AnswersContext);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: any) {
    // e.preventDefault();
    useAnswersContext?.answers
      ? postForm({ answers: useAnswersContext?.answers })
      : setError('Could not post results to server.');
  }

  return (
    <div className={styles.form_group}>
      <form className={styles._form} action='/stats'>
        {forms.forms.map((form) => (
          <Form form={form.form} key={form.form.question} />
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

export default FormGroup;
