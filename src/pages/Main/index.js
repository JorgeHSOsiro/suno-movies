import React, { useContext } from 'react';
import { Catalog } from '../../components/Catalog';
import { Featured } from '../../components/Featured';
import { Search } from '../../components/Search';
import moviesContext from '../../context/moviesContext';

export function Main() {
  const { searchActive } = useContext(moviesContext);
  return (
    <div>
      {!searchActive && <Search />}
      <Featured />
      <Catalog />
    </div>
  );
}
