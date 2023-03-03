function fetchUsers() {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1', {
    mode: 'no-cors',
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      throw response;
    }
    return response.json();
  });
}

export default fetchUsers;
// api : https://alexwohlbruck.github.io/cat-facts/docs/
