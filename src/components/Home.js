import React, { Component } from 'react';
import '../styles/home.css';
import Jumbotron from './Jumbotron';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
