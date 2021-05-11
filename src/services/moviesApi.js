const API_KEY = '38a7c1e49c7c6930df26d2861bbe98a9';
const moviesApi = 'https://api.themoviedb.org/3';

export const fetchMovies = async (sorted) => {
  return fetch(
    `${moviesApi}/discover/movie?api_key=${API_KEY}&sort_by=${sorted}`
  );
};

export const fetchGenres = async () => {
  return fetch(`${moviesApi}/genre/movie/list?api_key=${API_KEY}`);
};

export const fetchMovie = async (id) => {
  return fetch(`${moviesApi}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);
}

export const fetchVideo = async (id) => {
  return fetch(`${moviesApi}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
}