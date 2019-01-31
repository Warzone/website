import React, { Component } from 'react';
import '../styles/jumbotron.css';
import Button from '@material-ui/core/Button';

class Jumbotron extends Component {
  constructor() {
    super();

    this.state = {
      heading: 'PLAY',
      hidden: false
    }
  }

  initialiseSlideChanger() {
    if (this.slideChanger) clearInterval(this.slideChanger);
    this.slideChanger = setInterval(() => {
      let newHeading;
      switch (this.state.heading) {
        case 'PLAY':
          newHeading = 'COMPETE';
          console.log(newHeading);
          break;
        case 'COMPETE':
          newHeading = '???';
          console.log(newHeading);
          break;
        case '???':
          newHeading = 'PLAY';
          console.log(newHeading);
          break;
        default:
          newHeading = 'PLAY';
      }
      this.setState({ heading: newHeading });
      console.log('set state');
    }, 15000);
  }

  tryDisableSlideChanger() {
    if (this.slideChanger) {
      clearInterval(this.slideChanger);
      return true;
    }
    return false;
  }

  componentDidMount() {
    this.initialiseSlideChanger();
    document.addEventListener('visibilitychange', (e) => {
      if (document.hidden) return this.tryDisableSlideChanger();
      return this.initialiseSlideChanger();
    });
  }

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='jumbotron-header'>{this.state.heading}</h1>
        <div className='jumbotron-buttons'>
          <Button variant='contained' color='primary'>
            Enter a match
          </Button>
          <div className='jumbotron-button-divider'></div>
          <Button variant='contained' color='secondary'>
            View top players
          </Button>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
