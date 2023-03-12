import styles from './page_list.module.scss';

export default function PageList() {
  return (
    <div className={styles.links_list}>
      <ul>
        <li>
          <a href={'/'}>Questionario</a>
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
