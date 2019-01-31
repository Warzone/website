import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <AppBar position='fixed' className='nav' elevation={1}>
        <Toolbar variant='dense'>
          <div className='container nav-container'>
            <img className='nav-logo' src='img/warzone.svg' alt='Warzone logo' />
            <Typography variant='h6' color='inherit' className='nav-grow'>
              <Link to='/' className='nav-link'>
                Warzone
              </Link>
            </Typography>
            <Link to='/play' className='nav-button'>Play</Link>
            <Link to='/store' className='nav-button'>Store</Link>
            <Link to='/forum' className='nav-button'>Forum</Link>
            <Link to='/leaderboard' className='nav-button'>Leaderboard</Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;