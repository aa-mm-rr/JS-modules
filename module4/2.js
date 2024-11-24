fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    console.log(data.value);
  })
  .catch(error => console.error('Error fetching joke:', error));
const jokeSearchForm = document.getElementById('jokeSearchForm');
const jokeQueryInput = document.getElementById('jokeQuery');
const searchResultsDiv = document.getElementById('searchResults');
jokeSearchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const query = jokeQueryInput.value.trim();
  if (query) {
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        searchResultsDiv.innerHTML = '';

        if (data.result.length === 0) {
          searchResultsDiv.innerHTML = 'No jokes found.';
        } else {
          data.result.forEach(joke => {
            const article = document.createElement('article');
            const jokeText = document.createElement('p');
            jokeText.textContent = joke.value;
            article.appendChild(jokeText);
            searchResultsDiv.appendChild(article);
          });
        }
      })
      .catch(error => console.error('Error fetching jokes:', error));
  } else {
    console.log('Please enter a search term.');
  }
});
