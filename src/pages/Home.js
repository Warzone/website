import React, { Component } from 'react';
import '../styles/pages/home.css';
import Jumbotron from '../components/Jumbotron';
import RecentGrid from '../components/recent/RecentGrid';

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
