const fetchForm = () => {
  return fetch('http://localhost:8080/GetQuestionary?name=demo1', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.status >= 400) {
      throw response;
    }
    return response.json();
  });
};

export default fetchForm;
