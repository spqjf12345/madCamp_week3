import React from 'react';
import './style/App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './route/Home';
import Profile from './route/Profile';
import MyGarden from './route/MyGarden';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Profile' component={Profile} />
        <Route path='/MyGarden' component={MyGarden} />
      </Switch>
    </Router>
  );
}

export default App;