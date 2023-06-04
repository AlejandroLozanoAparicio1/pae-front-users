import { useContext } from 'react';
import { RadialChart } from 'react-vis';
import { LabelsContext } from '../../context/LabelsContext';
import { StatsContext } from '../../context/StatsContext';
import styles from './stats_page.module.scss';

const StatsPage: React.FC = () => {
  const { mostSelected, selectedCount } = useContext(StatsContext);
  const { get } = useContext(LabelsContext);

  const myData = [{ angle: 2 }, { angle: 5 }, { angle: 2 }];

  return (
    <div className={styles.dataResults}>
      <div className={styles.container}>
        <h2 className={styles.title}>{get('stats.mostCommonAnswers')}</h2>
        <div className={styles.subtitles}>
          <h3 className={styles.subtitle}>Question</h3>
          <h3 className={styles.subtitle}>Most common answer</h3>
        </div>
        <ul>
          {mostSelected.map((item) => (
            <>
              <li className={styles.info}>
                <p className={styles.question}>{item.question}</p>
                <p className={styles.answer}>{item.answer}</p>
              </li>
              <div className={styles.divider}></div>
            </>
          ))}
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Cuanta gente ha contestado lo mismo que tú?</h2>
        {selectedCount.map((item) => (
          <p className={styles.info}>
            {item.answer} : {item.count}
          </p>
        ))}
      </div>

      <RadialChart data={myData} width={300} height={300} />
    </div>
  );
};

export default StatsPage;
