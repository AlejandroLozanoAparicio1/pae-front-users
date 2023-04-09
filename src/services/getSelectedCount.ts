const getSelectedCount = (answer: string) => {
  return fetch(`http://localhost:8080/selected?answer=${answer}`, {
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

export default getSelectedCount;
