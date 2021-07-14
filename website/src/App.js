import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react';
import Home from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Portfolio-Website/' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
