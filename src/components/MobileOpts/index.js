import React from 'react';

import styles from './mobileOpts.module.scss';

export function MobileOpts() {
  return (
    <div className={styles.optsContainer}>
      <button>Inicio</button>
      <button>Catalogo</button>
    </div>
  );
}
