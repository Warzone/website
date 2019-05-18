import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Leaderboard from './pages/Leaderboard';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/leaderboard' component={Leaderboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;