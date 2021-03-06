import React, { useContext, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiPlayCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import moviesContext from '../../context/moviesContext';

import styles from './cardCarousel.module.scss';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

interface Movie {
  id: number;
  title: string;
  thumb: string;
  rate: number;
  category: number[];
}


export function CardCarousel({ id, thumb, title, category, rate }: Movie) {
  const [converted, setConverted] = useState('');
  const [poster, setPoster] = useState('');
  const { categories } = useContext(moviesContext);

  useEffect(() => {
    const categoryConverted = categories
      .filter((item: any) => category.includes(item.id))
      .map((res: any) => res.name);
    setConverted(categoryConverted.join(', '));

    if (thumb) {
      setPoster(IMG_API + thumb);
    }
  }, [categories, category, thumb]);

  return (
    <div className={styles.cardContainer}>
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
