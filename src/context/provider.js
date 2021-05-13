import React, { useEffect, useState } from 'react';
import { fetchGenres } from '../services/moviesApi';
import MoviesContext from './moviesContext';

const Provider = ({ children }) => {
  const [layout, setLayout] = useState('emgrid');
  const [categories, setCategories] = useState([]);
  const [searchActive, setSearchActive] = useState(true);
  const [optActive, setOptActive] = useState(false);
  const [size, setSize] = useState(0);

  useEffect(() => {
    fetchGenres()
      .then((response) => response.json())
      .then((data) => setCategories(data.genres));
  }, []);

  const contextValue = {
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
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default Provider;
