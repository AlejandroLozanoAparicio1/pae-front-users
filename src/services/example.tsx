function fetchUsers() {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      console.log('Fetched data:');
      console.log(response.json());
    } else {
      console.log('Error fetching data');
    }
  });
}

export default fetchUsers;
// api : https://alexwohlbruck.github.io/cat-facts/docs/
