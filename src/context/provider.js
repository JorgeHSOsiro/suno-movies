import React, { useEffect, useState } from 'react';
import { fetchGenres } from '../services/moviesApi';
import MoviesContext from './moviesContext';

const Provider = ({ children }) => {
  const [layout, setLayout] = useState('emgrid');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchGenres()
      .then((response) => response.json())
      .then((data) => setCategories(data.genres));
  }, []);

  const contextValue = {
    layout,
    categories,
    setLayout,
    setCategories,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default Provider;
