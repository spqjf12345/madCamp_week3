import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './route/Home'
import MyProfile from './route/MyProfile'
import MyGarden from './route/MyGarden';
import './style/App.css';

class App extends React.Component {
  render(){
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={MyProfile} />
        <Route path='/mygarden' component={MyGarden} />
      </Switch>
    </HashRouter>
  );
}
}

export default App;