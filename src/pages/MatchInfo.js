import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Clock from '@material-ui/icons/Timer';
import '../styles/pages/match-info.css';
import { config } from '../';
import {
	formatTime,
	gamemodes,
	getElapsedTime,
	getStatusColor
} from '../utils';
import MatchTeams from '../components/match/MatchTeams';

var dateOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};

class MatchInfo extends Component {
	constructor() {
		super();
		this.getPlayerById = this.getPlayerById.bind(this);
	}

	state = {
		match: null
	};

	async componentDidMount() {
		let matchJson, matchRes;
		matchRes = await fetch(
			`${config.API_BASE}/mc/matches/${this.props.match.params.mid}`
		);
		if (!matchRes.ok)
			return console.error('Error fetching match: ' + matchRes.status);
		matchJson = await matchRes.json();
		this.setState({ match: matchJson });
		console.log(matchJson);
	}

	getPlayerById(id) {
		console.log(id);
		console.log(this.state.match.playersLoaded);
		let player = this.state.match.playersLoaded.find((p) => p._id === id);
		console.log(player);
		if (!player) return false;
		console.log(player);
		return player;
	}

	render() {
		let { match } = this.state;
		return (
			<div className='match-info page'>
				<div className='container'>
					{!match && (
						<div className='center'>
							<CircularProgress />
						</div>
					)}
					{match && (
						<div>
							<div className='row'>
								<div className='col-6'>
									<h1>{match.level.name}</h1>
									<h3>{gamemodes[match.level.gamemodes[0]]}</h3>
								</div>
								<div className='col-2' />
								<div
									className='col-4'
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'end',
										justifyContent: 'start'
									}}
								>
									<h1 style={{ color: getStatusColor(match) }}>
										<Clock /> {formatTime(getElapsedTime(match))}
									</h1>
									<h3>
										{new Date(match.loadedAt).toLocaleDateString(
											'en-US',
											dateOptions
										)}
									</h3>
								</div>
							</div>
							<hr />
							<div>
								<MatchTeams match={match} getPlayerById={this.getPlayerById} />
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default MatchInfo;
