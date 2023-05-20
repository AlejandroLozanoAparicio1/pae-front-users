import { API_HOST } from '../utils/constants';

const postForm = (body: AnswerType[]): Promise<any> =>
  fetch(`${API_HOST}/answer`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  });

export default postForm;
