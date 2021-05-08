import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import styles from './card.module.scss';

export function Cards(thumb, title, category, rate) {
  return (
    <div className={styles.cardContainer}>
      <img src={thumb} alt={`thumbnail de ${title}`} />
      <h3>{title}</h3>
      <p>{category}</p>
      <AiFillStar /> <p>{rate}</p>
    </div>
  );
}
