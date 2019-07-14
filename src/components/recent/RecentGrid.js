import React, { Component } from 'react';
import MatchHistory from './MatchHistory';
import { config } from '../..';
import KillHistory from './KillHistory';

class RecentGrid extends Component {
	state = {
		recentMatches: [],
		recentKills: []
	};

	async componentDidMount() {
		let matchRes, matchJson, killRes, killJson;

		// cache recent matches for entire session
		if (!window.sessionStorage.getItem('recent_matches')) {
			matchRes = await fetch(config.API_BASE + '/mc/match/latest');
			matchJson = await matchRes.json();
			window.sessionStorage.setItem(
				'recent_matches',
				JSON.stringify(matchJson)
			);
		} else
			matchJson = JSON.parse(window.sessionStorage.getItem('recent_matches'));

		// cache recent kills for entire session
		if (!window.sessionStorage.getItem('recent_kills')) {
			killRes = await fetch(config.API_BASE + '/mc/death/latest');
			killJson = await killRes.json();
			window.sessionStorage.setItem('recent_kills', JSON.stringify(killJson));
		} else killJson = JSON.parse(window.sessionStorage.getItem('recent_kills'));

		this.setState({ recentMatches: matchJson, recentKills: killJson });
	}

	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-7'>
						<MatchHistory
							matches={this.state.recentMatches}
							title='Recent Matches'
						/>
					</div>
					<div className='col-5'>
						<KillHistory kills={this.state.recentKills} title='Recent Kills' />
					</div>
				</div>
			</div>
		);
	}
}

export default RecentGrid;
