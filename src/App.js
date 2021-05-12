import { Header } from './components/Header';
import { Switch, Route } from 'react-router-dom';

import { Main } from './pages/Main/index';

import Provider from './context/provider';
import { Footer } from './components/Footer';
import { Details } from './pages/Details/index';
import './App.scss';

function App() {
  return (
    <Provider>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route path='/:id' component={ Details } />
        </Switch>
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
