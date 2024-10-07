const apiKey = '87eb933f7136212cda329345c6e29ff4';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

async function fetchMovies() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

async function fetchMovieById(id) {
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  try {
    const response = await fetch(movieUrl);
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

async function searchMovies(query) {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  try {
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}
