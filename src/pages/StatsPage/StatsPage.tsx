import styles from './stats_page.module.scss';

const StatsPage: React.FC = () => {
  return (
    <div className={styles.dataResults}>
      <div className={styles.container}>
        {/* {useAnswersContext?.answers.map((item) => {
          console.log('a');
          return (
            <DataResults
              questionId={item.questionId}
              answerId={item.answerId}
              answerText={item.answerText}
            ></DataResults>
          );
        })} */}
      </div>
    </div>
  );
};

export default StatsPage;
