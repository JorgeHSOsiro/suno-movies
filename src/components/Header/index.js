import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
          <a href="/" className={styles.links}>
            INÍCIO
          </a>
        </div>
        <div className={styles.linkCat}>
          <ScrollLink  className={styles.links} to="catalogo"  smooth={true} duration={500}>
            CATÁLOGO
          </ScrollLink>
        </div>
        <button type="button" className={styles.searchBtn}>
          <GoSearch />
        </button>
      </nav>
    </div>
  );
}
