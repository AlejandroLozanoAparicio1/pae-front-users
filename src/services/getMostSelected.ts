const getMostSelected = (questionId: number) => {
  return fetch(`http://localhost:8080/mostSelected?question_id=${questionId}`, {
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

export default getMostSelected;
