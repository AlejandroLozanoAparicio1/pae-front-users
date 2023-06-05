import styles from './info_block.module.scss';

const InfoBlock: React.FC = () => {
  return (
    <div className={styles.info_container}>
      <h3 className={styles._title}>¿Qué es el radón?</h3>
      <p className={styles._text}>
        El radón es un gas radiactivo incoloro, inodoro e insípido. Se produce por desintegración
        radiactiva natural del uranio presente en suelos y rocas. El agua también puede contener
        radón.
        <br />
        <br />
        El radón emana fácilmente del suelo y pasa al aire, donde se desintegra y emite otras
        partículas radiactivas. Al respirar se inhalan esas partículas, que se depositan en las
        células que recubren las vías respiratorias, donde pueden dañar el ADN y provocar cáncer de
        pulmón.
      </p>
    </div>
  );
};

export default InfoBlock;
