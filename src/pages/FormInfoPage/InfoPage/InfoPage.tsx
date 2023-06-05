import InfoBlock from './Info/InfoBlock';
import styles from './info_page.module.scss';
import Video from './Video/Video';

const InfoPage: React.FC = () => {
  return (
    <div className={styles.block_video_info}>
      <InfoBlock />
      <Video />
    </div>
  );
};

export default InfoPage;
