import React from 'react';
import './style/App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from './route/Profile';
import MyGarden from './route/MyGarden';
import Home from './route/Home'
import SignUp from './Sign/SignUp'
import Timer from './route/TreeColumn'
import Grid from './route/Grid'

class App extends React.Component {
  render(){
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Profile' component={Profile} />
        <Route path='/MyGarden' component={MyGarden} />
        {/* <Route path='/timer' component={Timer} /> */}
      </Switch>
    </Router>
  );
}
}

export default App;