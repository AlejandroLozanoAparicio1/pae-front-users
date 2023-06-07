import { API_HOST } from '../../utils/constants';

const fetchForm = (questionaryName: string): Promise<QuestionResponse[][]> =>
  fetch(`${API_HOST}/GetQuestionary?name=${questionaryName}`, {
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

export default fetchForm;
