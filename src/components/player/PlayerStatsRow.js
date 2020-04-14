import React, { Component } from 'react';

class PlayerStatsRow extends Component {
	getLevelColour(level) {
		if (level <= 10) return '#AAAAAA';
		else if (level <= 20) return '#00AAAA';
		else if (level <= 30) return '#5555FF';
		else if (level <= 40) return '#FF55FF';
		else if (level <= 60) return '#AA00AA';
		else if (level <= 80) return '#AA0000';
		else if (level <= 100) return '#FF5555';
		else if (level <= 120) return '#FFAA00';
		else if (level <= 140) return '#FFFF55';
		else if (level <= 160) return '#55FF55';
		else return '#00AA00'; // levels above 160
	}

	render() {
		let { player } = this.props;
		return (
			<div className='player-info-stats row'>
				<div className='col-4 player-info-col'>
					<img
						style={{ width: '40px', marginBottom: '-75px' }}
						src={`https://crafatar.com/renders/body/${player.user.uuid}?overlay`}
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
							<h1
								className='no-padding-margin'
								style={{ color: this.getLevelColour(player.user.level) }}
							>
								{player.user.level}
							</h1>
							<span
								className='player-info-stat-title'
								style={{ color: this.getLevelColour(player.user.level) }}
							>
								Level
							</span>
						</div>
						<div className='col-2 center'>
							<h1 className='no-padding-margin'>{player.user.kills}</h1>
							<span className='player-info-stat-title'>Kills</span>
						</div>
						<div className='col-2 center'>
							<h1 className='no-padding-margin'>{player.user.deaths}</h1>
							<span className='player-info-stat-title'>Deaths</span>
						</div>
						{/* <div className='col-1.7 center'>
							<h1 className='no-padding-margin'>{player.user.kdr}</h1>
							<span className='player-info-stat-title'>K/D</span>
						</div> */}
						<div className='col-2 center'>
							<h1 className='no-padding-margin'>{player.user.wins}</h1>
							<span className='player-info-stat-title'>Wins</span>
						</div>
						<div className='col-2 center'>
							<h1 className='no-padding-margin'>{player.user.losses}</h1>
							<span className='player-info-stat-title'>Losses</span>
						</div>
						{/* <div className='col-1.7 center'>
							<h1 className='no-padding-margin'>{player.user.wlr}</h1>
							<span className='player-info-stat-title'>W/L</span>
						</div> */}
					</div>
				</div>
			</div>
		);
	}
}

export default PlayerStatsRow;
