import { createContext } from 'react';

type MoviesContextData = {
  layout: string;
  categories: any;
  optActive: boolean;
  size: number;
  searchActive: boolean;
  setSize: (state: number) => void;
  setOptActive: (state: boolean) => void;
  setLayout: (state: string) => void;
  setCategories: (state: any) => void;
  setSearchActive: (state: boolean) => void;
};

const moviesContext = createContext({} as MoviesContextData);

export default moviesContext;
