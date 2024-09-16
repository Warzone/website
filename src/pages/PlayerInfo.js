import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { config } from '../';
import '../styles/pages/player-info.css';
import PlayerStatsRow from '../components/player/PlayerStatsRow';
import KillHistory from '../components/recent/KillHistory';
import MatchHistory from '../components/recent/MatchHistory';
import NotFound from './NotFound';

class PlayerInfo extends Component {
	constructor() {
		super();

		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
	}

	state = {
		player: null,
		recentMatches: [],
		notFound: false
	};

	async componentDidMount(nextProps = { match: { params: { pid: null } } }) {
		let playerName = nextProps.match.params.pid || this.props.match.params.pid;
		let playerJson, playerRes;
		playerRes = await fetch(`${config.API_BASE}/mc/players/${playerName}`);
        if (playerRes.status === 404) return this.setState({ notFound: true });
		if (!playerRes.ok)
			return console.error('Error fetching player: ' + playerRes.status);
		playerJson = await playerRes.json();

		// Handle edge cases like 0 losses, 0 wins, 0 kills, 0 deaths
		if (playerJson.stats.deaths === 0) {
			playerJson.stats.kdr = playerJson.stats.kills;
		} else {
			playerJson.stats.kdr = (
				playerJson.stats.kills / playerJson.stats.deaths
			).toFixed(2);
		}
		if (!playerJson.stats.wins) playerJson.stats.wins = 0;
		if (!playerJson.stats.kills) playerJson.stats.kills = 0;
		if (!playerJson.stats.deaths) {
			playerJson.stats.deaths = 0;
			playerJson.stats.kdr = playerJson.stats.kills;
		} else {
			playerJson.stats.kdr = (
				playerJson.stats.kills / playerJson.stats.deaths
			).toFixed(2);
		}
		if (!playerJson.stats.losses) {
			playerJson.stats.losses = 0;
			playerJson.stats.wlr = playerJson.stats.wins;
		} else {
			playerJson.stats.wlr = (
				playerJson.stats.wins / playerJson.stats.losses
			).toFixed(2);
		}

		playerJson.deaths = [];

		this.setState({ player: playerJson });
		console.log(playerJson);

		// let matchRes, matchJson;
		// matchRes = await fetch(`${config.API_BASE}/mc/match/latest/${playerName}`);
		// matchJson = await matchRes.json();
		// if (matchJson.length === 0) return this.setState({ recentMatches: null });
		this.setState({ recentMatches: [] });
	}

	async componentWillReceiveProps(nextProps) {
		this.setState({ player: null });
		await this.componentDidMount(nextProps);
	}

	render() {
		let { player, notFound } = this.state;
		return (
			<div className='player-info page'>
				<div className='container'>
					{notFound && <NotFound />}
					{!player && !notFound && (
						<div className='center'>
							<CircularProgress />
						</div>
					)}
					{player && (
						<div>
							<PlayerStatsRow player={player} />
							<div className='row'>
								<div className='col-6'>
									<div>Recent Kills</div>
									<KillHistory
										kills={
											player.deaths.length === 0
												? null
												: player.deaths
														.sort((a, b) => a.date - b.date)
														.reverse()
										}
									/>
								</div>
								<div className='col-6'>
									<div>Recent Matches</div>
									<MatchHistory matches={this.state.recentMatches} />
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default PlayerInfo;
