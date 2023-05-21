import { API_HOST } from '../../utils/constants';

const postForm = (body: Answer[]): Promise<any> =>
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
  });

export default postForm;
