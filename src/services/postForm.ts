import PostFormType from '../utils/types/PostFormType';

function postForm(body: PostFormType) {
  fetch('https://localhost:8080/Questionary', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body }),
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      throw response;
    }
    return response.json();
  });
}

export default postForm;
