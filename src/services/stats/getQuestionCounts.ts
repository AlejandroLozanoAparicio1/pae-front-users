import { API_HOST } from '../../utils/constants';

const getQuestionCounts = (
  questionId: number,
): Promise<{ answer: string; timesSelected: number }[]> =>
  fetch(`${API_HOST}/times/answer?question_id=${questionId}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  });

export default getQuestionCounts;
