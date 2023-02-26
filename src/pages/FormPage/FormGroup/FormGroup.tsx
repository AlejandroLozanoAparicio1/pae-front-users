import { createContext, useContext } from 'react';
import getForms from '../../../services/getForms';
import FormGroupType from '../../../utils/types/FormGroupType';
import Form from '../Form/Form';
import styles from './form_group.module.scss';

const FormGroup: React.FC = () => {
  const forms: FormGroupType = getForms();
  const AnswersContext = createContext<string[]>(['', '', '', '']);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(AnswersContext);
  }

  return (
    <AnswersContext.Provider value={['', '', '', '']}>
      <div className={styles.form_group}>
        <form className={styles._form} action='/stats'>
          {forms.forms.map((form) => (
            <Form form={form.form} key={form.form.question} />
          ))}
          <button type='submit' onClick={handleSubmit} className={styles._button}>
            submit
          </button>
        </form>
      </div>
    </AnswersContext.Provider>
  );
};

export default FormGroup;
