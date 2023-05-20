import { API_HOST } from '../utils/constants';

const getSelectedCount = (answer: string): Promise<any> =>
  fetch(`${API_HOST}/selected?answer=${answer}`, {
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

export default getSelectedCount;
