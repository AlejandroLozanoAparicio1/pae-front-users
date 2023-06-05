import styles from './video.module.scss';

const Video: React.FC = () => {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        src='https://www.youtube.com/embed/fJbyCVt6YH0'
        title='Una Nueva Era para el Radón en Europa'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
};

export default Video;
