import FormGroupType from '../utils/types/FormGroupType';

function fetchForms(): FormGroupType {
  return {
    forms: [
      {
        form: {
          id: '0',
          question: '¿Qué edad tiene?',
          possibleAnswers: [
            'Menos de 30 años',
            'Entre 30 y 40 años',
            'Entre 40 y 50 años',
            'Entre 50 y 65 años',
            'Más de 65 años',
          ],
        },
      },
      {
        form: {
          id: '1',
          question: '¿Cuál es su género?',
          possibleAnswers: ['Hombre', 'Mujer', 'No-binario', 'Otro'],
        },
      },
      {
        form: {
          id: '2',
          question: '¿En qué ciudad vive?',
          possibleAnswers: ['...'],
        },
      },
      {
        form: {
          id: '3',
          question: '¿Cuál es su código postal?',
          possibleAnswers: ['...'],
        },
      },
      {
        form: {
          id: '4',
          question: 'En el momento actual, ¿vive en la misma provincia en la que nació?',
          possibleAnswers: ['Sí', 'No', 'NA'],
        },
      },
      {
        form: {
          id: '5',
          question: '¿Usted fuma?',
          possibleAnswers: [
            'Nunca he fumado de forma habitual',
            'Soy exfumador desde hace más de 1 año',
            'Sí, fumo menos de un paquete al día',
            'Sí, fumo más de un paquete al día',
            'Otro: ...',
          ],
        },
      },
      {
        form: {
          id: '6',
          question: '¿Cuál es su nivel de estudios?',
          possibleAnswers: [
            'Educación obligatoria',
            'Bachillerato o grado medio/superior formación profesional',
            'Educación universitaria (grado o licenciatura)',
            'Estudios de post-grado universitario (Master/Doctorado)',
            'NA',
          ],
        },
      },
      {
        form: {
          id: '7',
          question: '¿Dónde reside actualmente?',
          possibleAnswers: [
            'En un piso/apartamento',
            'En una casa adosada',
            'En una casa unifamiliar independiente',
            'Otros: ...',
          ],
        },
      },
      {
        form: {
          id: '8',
          question:
            'Si vive en una casa, utiliza la planta baja o el sótano de su vivienda habitualmente?',
          possibleAnswers: ['Sí', 'No', 'No se aplica'],
        },
      },
      {
        form: {
          id: '9',
          question: '¿Cuánto tiempo hace que reside en su vivienda?',
          possibleAnswers: ['Menos de 1 año', 'Más de 1 año: (indique cuántos años) ...'],
        },
      },
      {
        form: {
          id: '10',
          question: '¿Habitualmente ventila su casa?',
          possibleAnswers: [
            'Sí, ventilo todos los días',
            'Sí, pero solo ventilo algunos días de la semana, por ejemplo el fin de semana',
            'Sí, intento ventilar pero hay épocas del año como invierno que no ventilo por el frío',
            'No, considero que no es necesario ventilar',
            'Otro: ...',
          ],
        },
      },
      {
        form: {
          id: '11',
          question: 'Sabes aproximadamente en qué año se construyó la vivienda?',
          possibleAnswers: ['Sí: ...', 'No'],
        },
      },
      {
        form: {
          id: '12',
          question: '¿Usted trabaja en su domicilio?',
          possibleAnswers: [
            'Sí, todos los días laborables.',
            'Si, pero trabajo desde mi domicilio únicamente unos días a la semana',
            'No, no trabajo nunca desde casa',
            'Otro: ...',
          ],
        },
      },
      {
        form: {
          id: '13',
          question: '¿Cuántas personas conviven en su domicilio?',
          possibleAnswers: ['Solo yo', '2 personas', '3 personas', 'Más de 3 personas'],
        },
      },
    ],
  };
}

export default fetchForms;
