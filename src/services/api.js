const API_KEY = '38a7c1e49c7c6930df26d2861bbe98a9';
const moviesApi = 'https://api.themoviedb.org/3';

const fetchMovies = async (sorted) => {
    return fetch(`${moviesApi}/discover/movie?api_key=${API_KEY}&sort_by=${sorted}`);
}

export default fetchMovies;
