import { API_HOST } from '../utils/constants';

const fetchForm = (questionaryName: string): Promise<any> => {
  console.log(process.env.REACT_APP_API_HOST_DEV);
  return fetch(`${API_HOST}/GetQuestionary?name=${questionaryName}`, {
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
};

export default fetchForm;
