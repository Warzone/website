import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { config } from '../';
import '../styles/pages/player-info.css';

class PlayerInfo extends Component {
  state = {
    player: null
  };

  async componentDidMount() {
    let playerJson, playerRes;
    playerRes = await fetch(
      `${config.API_BASE}/mc/player/${this.props.match.params.pid}`
    );
    if (!playerRes.ok)
      return console.error('Error fetching player: ' + playerRes.status);
    playerJson = await playerRes.json();
    this.setState({ player: playerJson });
    console.log(playerJson);
  }

  render() {
    let { player } = this.state;
    return (
      <div className='player-info page'>
        <div className='container'>
          {!player && (
            <div className='center'>
              <CircularProgress />
            </div>
          )}
          {player && (
            <div>
              <div className='player-info-stats row'>
                <div className='col-4 player-info-col'>
                  <h1 className='white player-name justify vertical-center'>
                    {player.user.name}
                  </h1>
                </div>
                <div className='col-8 player-info-col'>
                  <div className='player-info-row row'>
                    <div className='col-2 center'>
                      <h1 className='no-padding-margin'>{player.user.kills}</h1>
                      <span style={{ fontSize: '15px', textAlign: 'center' }}>
                        Kills
                      </span>
                    </div>
                    <div className='col-2 center'>
                      <h1 className='no-padding-margin'>
                        {player.user.deaths}
                      </h1>
                      <span style={{ fontSize: '15px', textAlign: 'center' }}>
                        Deaths
                      </span>
                    </div>
                    <div className='col-2 center'>
                      <h1 className='no-padding-margin'>
                        {Math.round(
                          (player.user.kills / player.user.deaths) * 100
                        ) / 100}
                      </h1>
                      <span style={{ fontSize: '15px', textAlign: 'center' }}>
                        K/D
                      </span>
                    </div>
                    <div className='col-2 center'>
                      <h1 className='no-padding-margin'>{player.user.wins}</h1>
                      <span style={{ fontSize: '15px', textAlign: 'center' }}>
                        Wins
                      </span>
                    </div>
                    <div className='col-2 center'>
                      <h1 className='no-padding-margin'>
                        {player.user.losses}
                      </h1>
                      <span style={{ fontSize: '15px', textAlign: 'center' }}>
                        Losses
                      </span>
                    </div>
                    <div className='col-2 center'>
                      <h1 className='no-padding-margin'>
                        {Math.round(
                          (player.user.wins / player.user.losses) * 100
                        ) / 100}
                      </h1>
                      <span style={{ fontSize: '15px', textAlign: 'center' }}>
                        W/L
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>player info cards</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PlayerInfo;
