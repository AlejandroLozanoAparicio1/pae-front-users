import { useContext } from 'react';
import { AnswersContext } from '../../context/AnswersContext';
import DataResults from './DataResults/DataResults';
import styles from './stats_page.module.scss';

const StatsPage: React.FC = () => {
  const useAnswersContext = useContext(AnswersContext);

  return (
    <div className={styles.data_results}>
      <div className={styles._container}>
        {useAnswersContext?.answers.map((item) => (
          <DataResults answer={item}></DataResults>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;
