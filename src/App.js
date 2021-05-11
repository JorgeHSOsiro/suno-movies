import { Header } from './components/Header';
import { Switch, Route } from 'react-router-dom';

import { Main } from './pages/Main';

import './App.scss';
import { Footer } from './components/Footer';
import Provider from './context/provider';

function App() {
  return (
    <Provider>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={ Main } />
        </Switch>
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
