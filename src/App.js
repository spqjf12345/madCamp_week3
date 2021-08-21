import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home'
import MyProfile from './routes/MyProfile'
import MyGarden from './routes/MyGarden';
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