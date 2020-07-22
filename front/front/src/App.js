import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TripList from './TripList';
import Navbar from './Navbar';
import AdminPage from './AdminPage';
import Filter from './Filter';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/tips">
            <TripList />
          </Route>
            <Route exact path="/partage-ton-tip">
            <AdminPage />
            </Route>
            <Route exact path="/continents">
            <Filter />
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
