import React, { Component } from 'react';

class PlayerStatsRow extends Component {
  render() {
    let { player } = this.props;
    return (
      <div className='player-info-stats row'>
        <div className='col-4 player-info-col'>
          <img
            style={{ width: '40px', marginBottom: '-75px' }}
            src={`https://crafatar.com/renders/body/${
              player.user.uuid
            }?overlay`}
            alt='Player skin'
          />
          <h1
            className='white player-name justify vertical-center'
            style={{ marginLeft: '50px' }}
          >
            {player.user.name}
          </h1>
        </div>
        <div className='col-8 player-info-col'>
          <div className='player-info-row row'>
            <div className='col-2 center'>
              <h1 className='no-padding-margin'>{player.user.kills}</h1>
              <span className='player-info-stat-title'>Kills</span>
            </div>
            <div className='col-2 center'>
              <h1 className='no-padding-margin'>{player.user.deaths}</h1>
              <span className='player-info-stat-title'>Deaths</span>
            </div>
            <div className='col-2 center'>
              <h1 className='no-padding-margin'>{player.user.kdr}</h1>
              <span className='player-info-stat-title'>K/D</span>
            </div>
            <div className='col-2 center'>
              <h1 className='no-padding-margin'>{player.user.wins}</h1>
              <span className='player-info-stat-title'>Wins</span>
            </div>
            <div className='col-2 center'>
              <h1 className='no-padding-margin'>{player.user.losses}</h1>
              <span className='player-info-stat-title'>Losses</span>
            </div>
            <div className='col-2 center'>
              <h1 className='no-padding-margin'>{player.user.wlr}</h1>
              <span className='player-info-stat-title'>W/L</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerStatsRow;
