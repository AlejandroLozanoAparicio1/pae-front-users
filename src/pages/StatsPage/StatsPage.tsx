import { useContext, useEffect } from 'react';
import { RadialChart } from 'react-vis';
import { AnswersContext } from '../../context/AnswersContext';
import { LabelsContext } from '../../context/LabelsContext';
import { StatsContext } from '../../context/StatsContext';
import postForm from '../../services/forms/postForm';
import styles from './stats_page.module.scss';

const StatsPage: React.FC = () => {
  const { answers, questionStats, answerStats, questIdStats } = useContext(AnswersContext);
  const {
    getMostSelectedStats,
    getCountStats,
    getAllCountStats,
    mostSelected,
    selectedCount,
    questionCounts,
  } = useContext(StatsContext);
  const { get } = useContext(LabelsContext);
  console.log('render');

  useEffect(() => {
    if (answers.length > 0) {
      postForm(answers);
      getMostSelectedStats(questionStats);
      getCountStats(answerStats);
      getAllCountStats(questIdStats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

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
        <RadialChart data={item} width={300} height={300} />
      ))}
    </div>
  );
};

export default StatsPage;
