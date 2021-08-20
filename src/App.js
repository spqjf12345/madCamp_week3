import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './route/Home'
import MyProfile from './route/MyProfile'
import MyGarden from './route/MyGarden';

import './style/App.css';

class App extends React.Component {
  render(){
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/madCamp_week3' component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={MyProfile} />
        <Route path='/mygarden' component={MyGarden} />
      </Switch>
    </Router>
  );
}
}

export default App;