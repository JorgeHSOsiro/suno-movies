import React, { useContext, useEffect, useState } from 'react';
import { Cards } from '../Cards';
import { fetchMovies } from '../../services/moviesApi';

import styles from './catalog.module.scss';
import moviesContext from '../../context/moviesContext';

export function Catalog() {
  const [movies, setMovies] = useState([]);
  const [halfMovies, setHalfMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('');
  const [pop, setPop] = useState(false);
  const [converted, setConverted] = useState('');
  const { layout, setLayout, categories } = useContext(moviesContext);

  const simpleArray = [{ id: 0, name: 'por gênero' }, ...categories];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!pop && !converted) {
      fetchMovies('release_date.desc', 'por gênero')
        .then((result) => result.json())
        .then((data) => {
          setMovies(data.results);
          if (layout === 'emgrid') {
            setHalfMovies(data.results.slice(0, 6));
          } else {
            setHalfMovies(data.results.slice(0, 3));
          }
        });
    } else if (pop) {
      fetchMovies('popularity.desc', 'por gênero')
        .then((result) => result.json())
        .then((data) => {
          setMovies(data.results);
          if (layout === 'emgrid') {
            setHalfMovies(data.results.slice(0, 6));
          } else {
            setHalfMovies(data.results.slice(0, 3));
          }
        });
    } else if (converted !== '') {
      fetchMovies('release_date.desc', converted)
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
    if (category !== '') {
      const categoryConverted = categories.find(
        (item) => category === item.name
      );
      setConverted(categoryConverted.id);
      setPop(false);
    }
  }, [pop, layout, category, categories, converted]);

  const showMore = () => {
    setShow(true);
  };

  const setPopularity = () => {
    setPop(true);
    setCategory('');
    setConverted('');
  };

  return (
    <div id="catalogo" className={styles.catalogContainer}>
      <header className={styles.headerCatalog}>
        <h1>
          <span className={styles.dot}></span>
          <strong>Catálogo</strong> completo
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
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
            </select>
            <button
              className={styles.popular}
              type="button"
              onClick={() => setPopularity()}
            >
              mais populares
            </button>
          </div>
          <div className={styles.secBtnContainer}>
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
          <div
            className={
              layout === 'emgrid'
                ? styles.cardsContainerGrid
                : styles.cardsContainerList
            }
          >
            {show
              ? movies.map((movie) => (
                  <Cards
                    key={movie.id}
                    id={movie.id}
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
                    id={movie.id}
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
