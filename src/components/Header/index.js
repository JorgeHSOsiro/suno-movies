import React from 'react';
import { GoSearch } from 'react-icons/go';

import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.logoFirst}>
        SUNO <strong className={styles.logoSecond}>MOVIES</strong>
      </h1>

      <nav className={styles.linksContainer}>
        <div className={styles.linkInicio}>
          <a href="/home" className={styles.links}>
            INÍCIO
          </a>
        </div>
        <div className={styles.linkCat}>
          <a href="/home" className={styles.links}>
            CATÁLOGO
          </a>
        </div>
        <button type="button" className={styles.searchBtn}>
          <GoSearch />
        </button>
      </nav>
    </div>
  );
}
