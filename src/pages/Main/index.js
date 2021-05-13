import React, { useContext } from 'react';
import { Catalog } from '../../components/Catalog';
import { Featured } from '../../components/Featured';
import { MobileOpts } from '../../components/MobileOpts';
import { Search } from '../../components/Search';
import moviesContext from '../../context/moviesContext';

export function Main() {
  const { searchActive, optActive } = useContext(moviesContext);
  return (
    <div>
      {optActive && <MobileOpts />}
      {!searchActive && <Search />}
      <Featured />
      <Catalog />
    </div>
  );
}
