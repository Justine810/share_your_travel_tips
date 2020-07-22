import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TripList from './TripList';
import Navbar from './Navbar';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/tips">
            <TripList />
          </Route>
            <Route exact path="/categories">
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;