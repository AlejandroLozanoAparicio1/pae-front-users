import { useContext } from 'react';
import { RadialChart } from 'react-vis';
import { DiscreteColorLegend } from 'react-vis';
import { LabelsContext } from '../../context/LabelsContext';
import { useStats } from '../../hooks/useStats';
import styles from './stats_page.module.scss';

const StatsPage: React.FC = () => {
  const { mostSelected, selectedCount, questionCounts } = useStats();
  const { get } = useContext(LabelsContext);

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
              <li key={`most-selected-answer-${item.answer}`} className={styles.info}>
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
      {questionCounts.map((item) => (
        <div className={styles.chartContainer}>
          <h2 className={styles.subtitle}>{item.question}</h2>
          <div className={styles.chart}>
            <RadialChart data={item.counts} width={300} height={300} />
            <DiscreteColorLegend height={300} width={300} items={item.answers} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsPage;
