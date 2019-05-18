import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import ServerRules from './pages/ServerRules';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/leaderboard' component={Leaderboard} />
            <Route exact path='/rules' component={ServerRules} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
