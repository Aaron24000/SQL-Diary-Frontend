import Navigation from './components/navbar/Navigation';
import Homepage from './components/pages/Homepage';
import './index.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
    <div className="app">
      <Navigation />
      <Switch>
      <Route exact path="/">
      <Homepage />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
