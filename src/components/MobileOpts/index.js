import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import styles from './mobileOpts.module.scss';

export function MobileOpts() {
  return (
    <div className={styles.optsContainer}>
      <div className={styles.btnContainer}>
        <a className={styles.links} href="/" >Início</a>
        <ScrollLink
            className={styles.links}
            to="catalogo"
            smooth={true}
            duration={500}
          >
            catálogo
          </ScrollLink>
      </div>
    </div>
  );
}
