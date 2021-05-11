import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiPlayCircle } from 'react-icons/bi';

import styles from './card.module.scss';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

export function Cards({ thumb, title, category, rate, description }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={IMG_API + thumb} alt={`thumbnail de ${title}`} />
        <BiPlayCircle className={styles.playMovie} />
      </div>
      <div>
        <h3>{title}</h3>
        <p className={styles.category}>{category}</p>
        <div className={styles.rateContent}>
          <AiFillStar className={styles.star} />
          <p> {rate}</p>
        </div>
        <div className={styles.descContent}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
