import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import React, { Component } from 'react';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;