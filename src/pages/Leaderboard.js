import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import '../styles/pages/leaderboard.css';
import { config } from '../';

class Leaderboard extends Component {
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
			<div className='page center'>
				<div className='container'>
					<h1>Leaderboard</h1>
					<h3>The highest ranked players on Warzone</h3>
					{this.state.leaderboard.length === 0 && (
						<div className='center'>
							<CircularProgress />
						</div>
					)}
					<Table className='leaderboard-table'>
						<TableBody>
							{this.state.leaderboard.map((player) => (
								<TableRow key={player._id}>
									<TableCell
										className='leaderboard-table-cell'
										component='td'
										scope='row'
									>
										<img
											className='leaderboard-player-head'
											src={`https://crafatar.com/avatars/${player.uuid}?size=32`}
											alt='Player head'
										/>
										<span className='bold'>
											<Link
												className='leaderboard-link white'
												to={`/p/${player.name}`}
											>
												{player.name}
											</Link>
										</span>
									</TableCell>
									<TableCell
										className='leaderboard-table-cell leaderboard-rank'
										component='td'
									>
										#
										<span className='bold'>
											{this.state.leaderboard.indexOf(player) + 1}
										</span>
									</TableCell>
									<TableCell
										className='leaderboard-table-cell center'
										component='td'
									>
										<span className='bold'>{player.kills}</span>
										<br />
										kills
									</TableCell>
									<TableCell
										className='leaderboard-table-cell center'
										component='td'
									>
										<span className='bold'>{player.wins}</span>
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

export default Leaderboard;
