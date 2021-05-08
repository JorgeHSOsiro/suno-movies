import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import styles from './carousel.module.scss';

export function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <button className={styles.backward} type="button">
        <BsChevronLeft />
      </button>
      <div>
          Cards here!
      </div>
      <button className={styles.forward} type="button">
        <BsChevronRight />
      </button>
    </div>
  );
}
