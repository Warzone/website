import React, { Component } from 'react';
import '../styles/home.css';
import Jumbotron from './Jumbotron';
import RecentGrid from './recent/RecentGrid';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Jumbotron />
        <div className='container'>
          <RecentGrid />
        </div>
      </div>
    );
  }
}

export default Home;
