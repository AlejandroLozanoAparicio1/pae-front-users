import styles from './Switch.module.scss';

export const Switch: React.FC<{ onChange: (e: any) => void }> = ({ onChange }) => {
  return (
    <label className={styles.switch}>
      <input type='checkbox' onChange={onChange} />
      <span className={`${styles.slider} ${styles.roundSlider}`}></span>
    </label>
  );
};
