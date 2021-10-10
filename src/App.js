import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import List from './components/List';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list">
          <List />
        </Route>
      </Switch>
    </>
  );
}

export default App;
