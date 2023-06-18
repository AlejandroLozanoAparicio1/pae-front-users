import { DiscreteColorLegend, RadialChart } from 'react-vis';
import styles from './stats_page.module.scss';

const StatsPage: React.FC = () => {
  const questionCounts = [
    {
      question: '1. ¿Cuál es su género?',
      answers: [
        {
          title: 'Masculino',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
        {
          title: 'Femenino',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
        {
          title: 'No binario',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
        {
          title: 'Prefiero no responder',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
      ],
      counts: [
        {
          angle: 15,
        },
        {
          angle: 5,
        },

        {
          angle: 3,
        },
        {
          angle: 17,
        },
      ],
    },
    {
      question: '8. ¿Ha fumado o fuma otros productos a parte de cigarrillos?',
      answers: [
        {
          title: 'Puros',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
        {
          title: 'Vaper/Cigarrillo electrónico',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
        {
          title: 'Cannabis',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },

        {
          title: 'No',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
      ],
      counts: [
        {
          angle: 4,
        },
        {
          angle: 5,
        },

        {
          angle: 9,
        },

        {
          angle: 5,
        },
      ],
    },
    {
      question: '24. ¿Antes de hacer esta encuesta sabía algo sobre el radón?',
      answers: [
        {
          title: 'Sí',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
        {
          title: 'Me suena',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
        {
          title: 'No',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
        {
          title: 'No lo sé',
          strokeWidth: 90,
          strokeStyle: 'wide',
        },
      ],
      counts: [
        {
          angle: 7,
        },
        {
          angle: 5,
        },
        {
          angle: 5,
        },
        {
          angle: 9,
        },
      ],
    },
  ];

  return (
    <div className={styles.dataResults}>
      {questionCounts.map((item) => (
        <div className={styles.chartContainer}>
          <h2 className={styles.subtitle}>{item.question}</h2>
          <div className={styles.chart}>
            <RadialChart className={styles.radial} data={item.counts} width={300} height={300} />
            <DiscreteColorLegend
              className={styles.legend}
              height={150}
              width={300}
              items={item.answers}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsPage;
