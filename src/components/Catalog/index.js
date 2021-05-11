import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards';
import styles from './catalog.module.scss';

export function Catalog() {
  const [movies, setMovies] = useState([]);
  const [halfMovies, setHalfMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('');
  const [layout, setLayout] = useState('');
  const simpleArray = ['por gênero', '1', '2', '3', '4', '5'];

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=38a7c1e49c7c6930df26d2861bbe98a9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
        setHalfMovies(data.results.slice(0, 6));
      });
  }, []);

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
            <button type="button">mais populares</button>
          </div>
          <div>
            <select
              className={styles.selectOpt}
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
            >
              <option value="emlista">em lista</option>
              <option value="emgrid">em grid</option>
            </select>
          </div>
        </section>
        <section className={styles.listSection}>
          <div className={styles.cardsContainer}>
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
