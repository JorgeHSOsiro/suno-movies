import React, { useEffect, useState, ReactNode } from 'react';
import { fetchGenres } from '../services/moviesApi';
import MoviesContext from './moviesContext';

type MovieContextProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: MovieContextProviderProps) => {
  const [layout, setLayout] = useState<string>('emgrid');
  const [categories, setCategories] = useState([]);
  const [searchActive, setSearchActive] = useState<boolean>(true);
  const [optActive, setOptActive] = useState<boolean>(false);
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    fetchGenres()
      .then((response) => response.json())
      .then((data) => setCategories(data.genres));
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        layout,
        categories,
        optActive,
        size,
        setSize,
        setOptActive,
        setLayout,
        setCategories,
        searchActive,
        setSearchActive,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default Provider;
