import styles from './page_list.module.scss';

export default function PageList() {
  return (
    <div className={styles.linksList}>
      <ul>
        <li>
          <a href={'/'}>Cuestionario</a>
        </li>
        <li>
          <a href={'/info'}>Información</a>
        </li>
        <li>
          <a href={'/stats'}>Estadísticas</a>
        </li>
      </ul>
    </div>
  );
}
