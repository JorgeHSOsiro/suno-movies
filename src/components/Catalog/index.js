import React from 'react';

import styles from './catalog.module.scss';

export function Catalog() {
  return (
    <div id="catalogo" className={styles.catalogContainer}>
      <header className={styles.headerCatalog}>
        <h1 className={styles.catalogTitle}>
          <span className={styles.dot}></span>
          <strong className={styles.releases}>Catalogo</strong> completo
        </h1>
      </header>
      <main className={styles.mainContainer}>
        <section>
          <div>
            <button type="button">por gênero</button>
            <button type="button">mais populares</button>
          </div>
          <button type="button">Em lista</button>
        </section>
        <section>
          <div>Lista de filmes</div>
        </section>
      </main>
    </div>
  );
}
