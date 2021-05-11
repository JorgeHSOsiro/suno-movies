import React, { useState } from 'react';
import MoviesContext from './moviesContext';

const Provider = ({ children }) => {
    const [layout, setLayout] = useState('emgrid');

    const contextValue = {
        layout,
        setLayout,
    };

    return (
        <MoviesContext.Provider value={ contextValue }>
            {children}
        </MoviesContext.Provider>
    );
}

export default Provider;
