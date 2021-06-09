require('dotenv').config();

const API_KEY = process.env.REACT_APP_KEY;
const moviesApi = 'https://api.themoviedb.org/3';

export const fetchMovies = async (sorted, genre) => {
  if (genre !== 'por gênero') {
    return fetch(`${moviesApi}/discover/movie?api_key=${API_KEY}&sort_by=${sorted}&include_adult=false&include_video=false&page=1&with_genres=${genre}`);
  } else {
    return fetch(
      `${moviesApi}/discover/movie?api_key=${API_KEY}&sort_by=${sorted}`
    );
  }
  
};

export const fetchGenres = async () => {
  return fetch(`${moviesApi}/genre/movie/list?api_key=${API_KEY}`);
};

export const fetchMovie = async (id) => {
  return fetch(`${moviesApi}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);
}

export const fetchVideo = async (id) => {
  return fetch(`${moviesApi}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
}

export const fetchSearch = (query) => {
  return fetch(`${moviesApi}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
}

export const fetchUpcoming = () => {
  return fetch(`${moviesApi}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
}