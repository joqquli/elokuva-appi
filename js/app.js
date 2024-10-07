document.addEventListener('DOMContentLoaded', () => {
    // Haku-toiminto
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
      const query = document.getElementById('search-input').value;
      if (query) {
        searchMovies(query).then(movies => displayMovies(movies));
      }
    });
  
    // Näytä suositut elokuvat aloitussivulla
    fetchMovies().then(movies => displayMovies(movies));
  
    // Näytetään suosikit ja katsotut elokuvat
    displayFavorites();
    displayWatched();
  
    // Navigointitoiminto
    document.getElementById('nav-home').addEventListener('click', () => showPage('home-page'));
    document.getElementById('nav-favorites').addEventListener('click', () => {
      displayFavorites();
      showPage('favorites-page');
    });
    document.getElementById('nav-watched').addEventListener('click', () => {
      displayWatched();
      showPage('watched-page');
    });
  });
  
  function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
  }
  
  function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = movies.map(movie => `
      <div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <button onclick="addToFavorites(${movie.id})">Kiinnostaa</button>
        <button onclick="addToWatched(${movie.id})">Nähty jo</button>
      </div>
    `).join('');
  }
  
  function addToFavorites(movieId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(movieId)) {
      favorites.push(movieId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert("Added to Favorites!");
    } else {
      alert("Movie is already in Favorites!");
    }
  }
  
  function addToWatched(movieId) {
    let watched = JSON.parse(localStorage.getItem('watched')) || [];
    if (!watched.includes(movieId)) {
      watched.push(movieId);
      localStorage.setItem('watched', JSON.stringify(watched));
      alert("Marked as Watched!");
    } else {
      alert("Movie is already marked as Watched!");
    }
  }
  
  function removeFromFavorites(movieId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
  }
  
  function removeFromWatched(movieId) {
    let watched = JSON.parse(localStorage.getItem('watched')) || [];
    watched = watched.filter(id => id !== movieId);
    localStorage.setItem('watched', JSON.stringify(watched));
    displayWatched();
  }
  
  function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    fetchMoviesByIds(favorites, 'favorite-movies', removeFromFavorites);
  }
  
  function displayWatched() {
    const watched = JSON.parse(localStorage.getItem('watched')) || [];
    fetchMoviesByIds(watched, 'watched-movies', removeFromWatched);
  }
  
  async function fetchMoviesByIds(ids, elementId, removeFunction) {
    const movieElements = document.getElementById(elementId);
    movieElements.innerHTML = '';
    for (const id of ids) {
      const movie = await fetchMovieById(id);
      movieElements.innerHTML += `
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <button onclick="${removeFunction.name}(${movie.id})">Remove</button>
        </div>
      `;
    }
  }
  