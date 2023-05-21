import { useContext } from 'react';
import { StatsContext } from '../../context/StatsContext';
import styles from './stats_page.module.scss';

const StatsPage: React.FC = () => {
  const { mostSelected, selectedCount } = useContext(StatsContext);

  return (
    <div className={styles.dataResults}>
      <div className={styles.container}>
        {mostSelected.map((item) => (
          <p>
            {item.question} : {item.answer}
          </p>
        ))}
        {selectedCount.map((item) => (
          <p>
            {item.answer} : {item.count}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;
