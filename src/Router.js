import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import ServerRules from './pages/ServerRules';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='flex-wrapper'>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/leaderboard' component={Leaderboard} />
            <Route exact path='/rules' component={ServerRules} />
            <Route exact path='/privacy' component={PrivacyPolicy} />
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
