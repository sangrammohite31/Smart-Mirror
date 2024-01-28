
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote')
        .textContent = `User Name: ${data.name}`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

