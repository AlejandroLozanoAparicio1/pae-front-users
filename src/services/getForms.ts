import FormGroupType from '../utils/types/FormGroupType';

function fetchForms(): FormGroupType {
  return {
    forms: [
      {
        form: {
          id: '0',
          question: 'A que grupo perteneces?',
          possibleAnswers: [
            'Pacient amb càncer o familiar d’un pacient amb cancer',
            'Professional sanitari',
            'Professional relacionat amb el radó',
            'Expert en radó',
            'Ciutadà d’una zona amb radó',
          ],
        },
      },
      {
        form: {
          id: '1',
          question: 'Sabes qué es el gas radón?',
          possibleAnswers: ['Sí', 'No'],
        },
      },
      {
        form: {
          id: '2',
          question:
            'En caso de haber respondido afirmativamente a la pregunta anterior, cómo lo has descubierto?',
          possibleAnswers: [
            'Conocidos, amigos, família',
            'Hospital clínic',
            '...',
            '...',
            '...',
            '...',
          ],
        },
      },
      {
        form: {
          id: '3',
          question: 'Cómo has encontrado este cuestionario?',
          possibleAnswers: [
            'Conocidos, amigos, família',
            'Hospital clínic',
            '...',
            '...',
            '...',
            '...',
          ],
        },
      },
    ],
  };
}

export default fetchForms;
