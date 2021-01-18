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
import Login from './route/Login'
import MyProfile from './route/MyProfile'


class App extends React.Component {
  render(){
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/signup' exact component={SignUp} />
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Home} />
        <Route path='/Profile' component={MyProfile} />
        <Route path='/MyGarden' component={MyGarden} />
        {/* <Route path='/timer' component={Timer} /> */}
      </Switch>
    </Router>
  );
}
}

export default App;