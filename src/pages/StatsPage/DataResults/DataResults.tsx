import styles from './data_results.module.scss';

const DataResults: React.FC<{ sentence: string; highlight: string }> = ({
  sentence,
  highlight,
}) => {
  return (
    <p className={styles.answer}>
      {sentence}
      <span className={styles.highlight}>{highlight}</span>
    </p>
  );
};

export default DataResults;
