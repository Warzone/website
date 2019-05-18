import React, { Component } from 'react';
import '../styles/components/feature-grid.css';

class FeatureGrid extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-4 center'>
            <h3>Automated Matches</h3>
            <img src='https://i.imgur.com/DnobRWZ.png' alt='A Warzone KOTH Map' className='feature-grid-image' />
            <p>The server is always open for you to come on and practice your skills with friends!</p>
          </div>
          <div className='col-4 center'>
            <h3>Match Details</h3>
            <img src='https://i.imgur.com/0N5yGOV.png' alt='Warzone Match Details Page' className='feature-grid-image' />
            <p>Relive past matches with our match tracking</p>
          </div>
          <div className='col-4 center'>
            <h3>Player Stats</h3>
            <img src='https://i.imgur.com/ozg7teT.png' alt='Warzone Player Stats Page' className='feature-grid-image' />
            <p>Comprehensive player stats include K/D and W/L</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureGrid;
