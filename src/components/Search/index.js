import React, { useEffect, useState } from 'react';

import { fetchSearch } from '../../services/moviesApi';
import { CardSearch } from '../CardSearch';

import styles from './search.module.scss';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      fetchSearch(query)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [query]);

  return (
    <div>
      <div className={ styles.searchBox }>
        <div className={ styles.searchContent }>
          <label htmlFor="searchInput">
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              name="searchInput"
              id="searchInput"
            />
          </label>
          <div className={ styles.moviesContainer }>
            {movies.map((movie) => (
              <CardSearch
                id={ movie.id }
                thumb={ movie.poster_path }
                title={ movie.title }
                category={ movie.genre_ids }
                rate={ movie.vote_average }
              />
            ))}
          </div>
        </div>
      </div>
      <div className={ styles.searchOppacity }></div>
    </div>
  );
};
