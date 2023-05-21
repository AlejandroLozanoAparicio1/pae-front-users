import { API_HOST } from '../../utils/constants';

const getMostSelected = (questionId: number): Promise<{ optionsId: number; options: string }> =>
  fetch(`${API_HOST}/mostSelected?question_id=${questionId}`, {
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

export default getMostSelected;
