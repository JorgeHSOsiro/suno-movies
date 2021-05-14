import React, { useContext, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiPlayCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import moviesContext from '../../context/moviesContext';

import styles from './card.module.scss';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

export function Cards({ id, thumb, title, category, rate, description }) {
  const [converted, setConverted] = useState('');
  const [poster, setPoster] = useState('');
  const { layout, categories } = useContext(moviesContext);

  useEffect(() => {
    const categoryConverted = categories
      .filter((item) => category.includes(item.id))
      .map((res) => res.name);
    setConverted(categoryConverted.join(', '));

    if (thumb) {
      setPoster(IMG_API + thumb);
    }
  }, [categories, category, thumb]);

  return (
    <div
      className={
        layout === 'emgrid'
          ? styles.cardContainerGrid
          : styles.cardContainerLista
      }
    >
      <div className={styles.imageContainer}>
        <Link to={`/${id}`}>
          {!poster ? (
            <img
              src="https://via.placeholder.com/300/000000/FFFFFF/?text=Suno%20Movies%20"
              alt={`thumbnail de ${title}`}
            />
          ) : (
            <img src={poster} alt={`thumbnail de ${title}`} />
          )}

          <div className={styles.playMovie}>
            <BiPlayCircle className={styles.playIco} />
          </div>
        </Link>
      </div>

      <div>
        <div className={styles.headerContainer}>
          <h3>{title}</h3>
          <p className={styles.category}>{converted}</p>
          <div className={styles.rateContent}>
            <AiFillStar className={styles.star} />
            <p> {rate}</p>
          </div>
        </div>

        <div className={styles.descContent}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
