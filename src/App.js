import { Header } from './components/Header';
import { Switch, Route } from 'react-router-dom';

import { Main } from './pages/Main';

import './App.scss';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={ Main } />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
