import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { Component } from 'react';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;