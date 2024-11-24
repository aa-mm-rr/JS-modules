const form = document.getElementById('searchForm');
const queryInput = document.getElementById('query');
const resultsDiv = document.getElementById('results');


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const query = queryInput.value.trim();

  if (query) {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resultsDiv.innerHTML = '';
        if (data.length === 0) {
          resultsDiv.innerHTML = 'No results found.';
        } else {
          data.forEach(tvShow => {
            const article = document.createElement('article');
            const title = document.createElement('h2');
            title.textContent = tvShow.show.name;
            const link = document.createElement('a');
            link.href = tvShow.show.url;
            link.textContent = 'View Details';
            link.target = '_blank';
            const img = document.createElement('img');
            img.src = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
            img.alt = tvShow.show.name;
            const summary = document.createElement('div');
            summary.innerHTML = tvShow.show.summary;
            article.appendChild(title);
            article.appendChild(link);
            article.appendChild(img);
            article.appendChild(summary);
            resultsDiv.appendChild(article);
          });
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  } else {
    console.log('Please enter a TV show name.');
  }
});
