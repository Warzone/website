import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import '../styles/pages/leaderboard.css';
import { config } from '../';

class Leaderboards extends Component {
  state = {
    leaderboard: []
  };

  async componentDidMount() {
    var leaderboardJson, leaderboardRes;
    if (!window.sessionStorage.getItem('leaderboard')) {
      leaderboardRes = await fetch(config.API_BASE + '/mc/leaderboard/kills');
      leaderboardJson = await leaderboardRes.json();
      window.sessionStorage.setItem(
        'leaderboard',
        JSON.stringify(leaderboardJson)
      );
    } else
      leaderboardJson = JSON.parse(
        window.sessionStorage.getItem('leaderboard')
      );

    this.setState({ leaderboard: leaderboardJson });
  }

  render() {
    return (
      <div className='leaderboards'>
        <div className='container'>
          <h1>Leaderboards</h1>
          <h3>The highest ranked players on Warzone</h3>
          {this.state.leaderboard.length === 0 && (
            <div className='center'>
              <CircularProgress />
            </div>
          )}
          <Table className='leaderboards-table'>
            <TableBody>
              {this.state.leaderboard.map((player) => (
                <TableRow key={player._id}>
                  <TableCell
                    className='leaderboards-table-cell'
                    component='td'
                    scope='row'
                  >
                    <img
                      className='leaderboards-player-head'
                      src={`https://crafatar.com/avatars/${player.uuid}`}
                      alt='Player head'
                    />
                    <strong>
                      <Link
                        className='leaderboards-link'
                        to={`/p/${player.name}`}
                      >
                        {player.name}
                      </Link>
                    </strong>
                  </TableCell>
                  <TableCell
                    className='leaderboards-table-cell leaderboards-rank'
                    component='td'
                  >
                    #
                    <strong>
                      {this.state.leaderboard.indexOf(player) + 1}
                    </strong>
                  </TableCell>
                  <TableCell
                    className='leaderboards-table-cell center'
                    component='td'
                  >
                    <strong>{player.kills}</strong>
                    <br />
                    kills
                  </TableCell>
                  <TableCell
                    className='leaderboards-table-cell center'
                    component='td'
                  >
                    <strong>{player.wins}</strong>
                    <br />
                    wins
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Leaderboards;
