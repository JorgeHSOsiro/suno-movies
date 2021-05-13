import React, { useContext, useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { GoSearch } from 'react-icons/go';
import { BiMenu } from 'react-icons/bi';

import styles from './header.module.scss';
import moviesContext from '../../context/moviesContext';

export function Header() {
  const {
    searchActive,
    setSearchActive,
    optActive,
    setOptActive,
    size,
    setSize,
  } = useContext(moviesContext);

  const showSearch = () => {
    setSearchActive(!searchActive);
  };

  useEffect(() => {
    const windowSize = window.innerWidth;
    setSize(windowSize);
    console.log(windowSize);
  }, [size]);

  const dropOpts = () => {
    setOptActive(!optActive);
  };

  return (
    <div className={styles.headerContainer}>
      {size <= 360 ? (
        <div>
          <button
            className={styles.burguerBtn}
            type="button"
            onClick={() => dropOpts()}
          >
            <BiMenu />
          </button>
        </div>
      ) : (
        ''
      )}
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
          <ScrollLink
            className={styles.links}
            to="catalogo"
            smooth={true}
            duration={500}
          >
            CATÁLOGO
          </ScrollLink>
        </div>
        <button
          type="button"
          className={searchActive ? styles.searchBtn : styles.searchBtnActive}
          onClick={() => showSearch()}
        >
          <GoSearch />
        </button>
      </nav>
    </div>
  );
}
