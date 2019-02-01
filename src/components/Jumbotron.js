import React, { Component } from 'react';
import '../styles/jumbotron.css';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {
  constructor() {
    super();

    this.state = {
      heading: 'Play',
      hidden: false
    }
  }

  async initialiseSlideChanger() {
    if (this.slideChanger) clearInterval(this.slideChanger);
    let headingElement = document.getElementById('jumbotron-header');
    headingElement.classList.add('jumbotron-slide-in-right');
    this.slideChanger = setInterval(() => {
      let newHeading;
      switch (this.state.heading) {
        case 'Play':
          newHeading = 'Compete';
          console.log(newHeading);
          break;
        case 'Compete':
          newHeading = '???';
          console.log(newHeading);
          headingElement.classList.add('jumbotron-slide-in-right');
          break;
        case '???':
          newHeading = 'Play';
          console.log(newHeading);
          break;
        default:
          newHeading = 'Play';
      }
      headingElement.classList.remove('jumbotron-slide-in-right');
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

  async componentDidMount() {
    await this.initialiseSlideChanger();
    document.addEventListener('visibilitychange', (e) => {
      if (document.hidden) return this.tryDisableSlideChanger();
      return this.initialiseSlideChanger();
    });
  }

  render() {
    return (
      <div className='jumbotron'>
        <div><h1 className='jumbotron-header center' id='jumbotron-header'>{this.state.heading}</h1></div>
        <div className='center'>
          <Tooltip disableFocusListener disableTouchListener title='Minecraft 1.8+'>
            <Button variant='contained' color='primary' component={Link} to='/play'>
              Enter a match
            </Button>
          </Tooltip>
          <div className='jumbotron-button-divider'></div>
          <Tooltip disableFocusListener disableTouchListener title='View leaderboards'>
            <Button variant='contained' color='secondary' component={Link} to='/leaderboard'>
              View top players
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
