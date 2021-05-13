import React, { useContext, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiPlayCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import moviesContext from '../../context/moviesContext';

import styles from './cardCarousel.module.scss';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

export function CardCarousel({ id, thumb, title, category, rate }) {
  const [converted, setConverted] = useState('');
  const { categories } = useContext(moviesContext);

  useEffect(() => {
    const categoryConverted = categories
      .filter((item) => category.includes(item.id))
      .map((res) => res.name);
    setConverted(categoryConverted.join(', '));
  }, [categories, category]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Link to={`/${id}`}>
          <img src={IMG_API + thumb} alt={`thumbnail de ${title}`} />
          <div className={styles.playMovie}>
            <BiPlayCircle className={styles.playIco} />
          </div>
        </Link>
      </div>

      <div>
        <h3>{title}</h3>
        <div>
          <p className={styles.category}>{converted}</p>
        </div>

        <div className={styles.rateContent}>
          <AiFillStar className={styles.star} />
          <p> {rate}</p>
        </div>
      </div>
    </div>
  );
}
