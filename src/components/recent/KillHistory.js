import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import '../../styles/components/recent/kill-history.css';

class KillHistory extends Component {
  render() {
    return (
      <div className='kill-history'>
        <h4>{this.props.title}</h4>
        {/* <hr /> */}
        {this.props.kills.length === 0 && (
          <div className='center'>
            <CircularProgress />
          </div>
        )}
        {this.props.kills.length > 0 && (
          <Table className='kill-history-table'>
            <TableBody>
              {this.props.kills.map((kill) => (
                <TableRow key={kill._id}>
                  <TableCell
                    className='kill-history-table-cell'
                    component='th'
                    scope='row'
                  >
                    <img
                      className='kill-history-player-head'
                      src={
                        !kill.killerLoaded
                          ? `https://crafatar.com/avatars/606e2ff0ed7748429d6ce1d3321c7838`
                          : `https://crafatar.com/avatars/${
                              kill.killerLoaded.uuid
                            }`
                      }
                      alt='Player head'
                    />
                  </TableCell>
                  <TableCell className='kill-history-table-cell'>
                    <strong>
                      {!kill.killerLoaded ? (
                        'Wilderness'
                      ) : (
                        <Link
                          className='kill-history-link white'
                          to={`/p/${kill.killerLoaded.name}`}
                        >
                          {kill.killerLoaded.name}
                        </Link>
                      )}
                    </strong>{' '}
                    killed{' '}
                    <Link
                      className='kill-history-link white'
                      to={`/p/${kill.playerLoaded.name}`}
                    >
                      <strong>{kill.playerLoaded.name}</strong>
                    </Link>
                  </TableCell>
                  <TableCell className='kill-history-table-cell'>
                    <img
                      className='kill-history-player-head'
                      src={`https://crafatar.com/avatars/${
                        kill.playerLoaded.uuid
                      }`}
                      alt='Player head'
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    );
  }
}

export default KillHistory;
