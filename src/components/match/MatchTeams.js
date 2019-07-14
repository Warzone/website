import React, { Component } from 'react';
import '../../styles/components/match/match-teams.css';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

class MatchTeams extends Component {
	render() {
		let { match, getPlayerById } = this.props;
		console.log(match.match.teamMappings);
		return (
			<div>
				<h2>Teams</h2>
				<div>
					<Table className='kill-history-table'>
						<TableBody>
							{match.match.teamMappings.map((player) => (
								<TableRow key={player.player}>
									<TableCell
										component='th'
										scope='row'
										className='kill-history-table-cell'
									>
										<span>{getPlayerById(player.player).name}</span>
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

export default MatchTeams;
