import FormGroupType from '../utils/types/FormGroupType';

function fetchForms(): FormGroupType {
  return {
    forms: [
      {
        form: {
          id: '0',
          question: '1',
          possibleAnswers: ['a', 'b', 'c', 'd'],
        },
      },
      {
        form: {
          id: '1',
          question: '2',
          possibleAnswers: ['e', 'f', 'g', 'h'],
        },
      },
      {
        form: {
          id: '2',
          question: '3',
          possibleAnswers: ['i', 'j', 'k', 'l'],
        },
      },
      {
        form: {
          id: '3',
          question: '4',
          possibleAnswers: ['m', 'n', 'o', 'p'],
        },
      },
    ],
  };
}

export default fetchForms;
