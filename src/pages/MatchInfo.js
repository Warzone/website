import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Clock from '@material-ui/icons/Timer';
import '../styles/pages/match-info.css';
import { config } from '../';
// import MatchTeams from '../components/match/MatchTeams';

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
			`${config.API_BASE}/mc/match/${this.props.match.params.mid}`
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
								<div className='col-4'>
									<h1>CTW</h1>
									<h3>TechnoWar</h3>
								</div>
								<div className='col-4' />
								<div className='col-4'>
									<h1>
										<Clock /> 00:25
									</h1>
								</div>
							</div>
							<hr />
							<div>
								{/* <MatchTeams match={match} getPlayerById={this.getPlayerById} /> */}
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default MatchInfo;
