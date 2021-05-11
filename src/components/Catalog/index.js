import React, { useContext, useEffect, useState } from 'react';
import { Cards } from '../Cards';
import fetchMovies from '../../services/api';

import styles from './catalog.module.scss';
import moviesContext from '../../context/moviesContext';

export function Catalog() {
  const [movies, setMovies] = useState([]);
  const [halfMovies, setHalfMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('');
  const [pop, setPop] = useState(false);
  const { layout, setLayout } = useContext(moviesContext);
  const simpleArray = ['por gênero', '1', '2', '3', '4', '5'];

  useEffect(() => {
    if (!pop) {
      fetchMovies('release_date.desc')
        .then((result) => result.json())
        .then((data) => {
          setMovies(data.results);
          if (layout === 'emgrid') {
            setHalfMovies(data.results.slice(0, 6));
          } else {
            setHalfMovies(data.results.slice(0, 3));
          }
        });
    } else {
      fetchMovies('popularity.desc')
        .then((result) => result.json())
        .then((data) => {
          setMovies(data.results);
          if (layout === 'emgrid') {
            setHalfMovies(data.results.slice(0, 6));
          } else {
            setHalfMovies(data.results.slice(0, 3));
          }
        });
    }
  }, [pop, layout]);

  const showMore = () => {
    setShow(true);
  };

  return (
    <div id="catalogo" className={styles.catalogContainer}>
      <header className={styles.headerCatalog}>
        <h1 className={styles.catalogTitle}>
          <span className={styles.dot}></span>
          <strong className={styles.releases}>Catalogo</strong> completo
        </h1>
      </header>
      <main className={styles.mainContainer}>
        <section className={styles.buttonSection}>
          <div className={styles.firstBtnContainer}>
            <select
              className={styles.selectOpt}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {simpleArray.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <button type="button" onClick={() => setPop(true)}>
              mais populares
            </button>
          </div>
          <div>
            <select
              className={styles.selectOpt}
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
            >
              <option value="emlista">em grid</option>
              <option value="emgrid">em lista</option>
            </select>
          </div>
        </section>
        <section className={styles.listSection}>
          <div className={layout === 'emgrid' ? styles.cardsContainerGrid : styles.cardsContainerList}>
            {show
              ? movies.map((movie) => (
                  <Cards
                    key={movie.id}
                    thumb={movie.poster_path}
                    title={movie.title}
                    category={movie.genre_ids}
                    rate={movie.vote_average}
                    description={movie.overview}
                  />
                ))
              : halfMovies.map((movie) => (
                  <Cards
                    key={movie.id}
                    thumb={movie.poster_path}
                    title={movie.title}
                    category={movie.genre_ids}
                    rate={movie.vote_average}
                    description={movie.overview}
                  />
                ))}
          </div>
          <button type="button" onClick={() => showMore()}>
            carregar mais
          </button>
        </section>
      </main>
    </div>
  );
}
