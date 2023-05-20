function postForm(body: AnswerType[]) {
  fetch('http://localhost:8080/answer', {
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
}

export default postForm;
