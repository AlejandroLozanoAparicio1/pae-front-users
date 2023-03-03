import PostFormType from '../utils/types/PostFormType';

function postForm(body: PostFormType) {
  return;
  /*
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1', {
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
  */
}

export default postForm;
// api : https://alexwohlbruck.github.io/cat-facts/docs/
