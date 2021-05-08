import React from 'react';
import { Carousel } from '../Carousel';

import styles from './featured.module.scss';

export function Featured() {
  return (
    <div className={styles.featuredContainer}>
      <section className={styles.featuredSection}>
        <h1>
          <span></span><strong>Lançamentos</strong> da semana
        </h1>
        <div>
            <Carousel />
        </div>
      </section>
    </div>
  );
}
