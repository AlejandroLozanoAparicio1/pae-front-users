import PostFormType from '../utils/types/PostFormType';

function postForm(body: PostFormType) {
  console.log(body.answers);
  fetch('http://localhost:8080/answer', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body.answers),
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      throw response;
    }
    return response.json();
  });
}

export default postForm;
