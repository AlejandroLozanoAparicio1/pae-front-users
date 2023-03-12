const fetchForm = () => {
  return fetch('http://localhost:8080/questions', {
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
};

export default fetchForm;
