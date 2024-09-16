import React, { Component } from 'react';
import '../../styles/components/match/match-teams.css';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { minecraftColorToHex } from '../../utils';

class MatchTeams extends Component {
	render() {
		let { match } = this.props;
		console.log('Parties', Object.keys(match.parties));
		return (
			<div>
				{Object.keys(match.parties).length > 0 && (
					<div>
						<h2>Teams</h2>
						<div>
							<Table className='team-table'>
								<TableBody>
									{Object.keys(match.parties)
										.sort((a, b) => {
											if (a < b) return -1;
											if (a > b) return 1;
											return 0;
										})
										.map((partyId) => {
                                            console.log("partyId????", partyId)
											let party = match.parties[partyId];
											return (
												<TableRow key={`party-${party.name}`}>
													<TableCell>
														<span
															className='bold'
															style={{
																color: party ? minecraftColorToHex(party.color) : ''
															}}
														>
															{party.name}
														</span>
													</TableCell>
												</TableRow>
											);
										})}
								</TableBody>
							</Table>
						</div>
					</div>
				)}
				<div>
					<h2>Players</h2>
					<div>
						<Table className='players-table'>
							<TableBody>
								{Object.keys(match.participants)
									.map((uuid) => match.participants[uuid])
									// sort by party name
									.sort((a, b) => {
										if (a.lastPartyName < b.lastPartyName) return -1;
										if (a.lastPartyName > b.lastPartyName) return 1;
										return 0;
									})
									.map((participant) => {
										let id = participant.id;
										if (participant.name.startsWith('.')) {
											id = 'c06f8906-4c8a-4911-9c29-ea1dbd1aab82';
										}
										let party = match.parties[participant.lastPartyName];
										return (
											<TableRow key={`participant-${participant.name}`}>
												<TableCell>
													<a href={`/p/${participant.name}`}>
														<img
															className='leaderboard-player-head'
															src={`https://crafatar.com/avatars/${id}?size=32`}
															alt='Player head'
														/>
														<span className='bold'>{participant.name}</span>
													</a>
												</TableCell>
												{party && <TableCell>
													<span
														className='bold'
														style={{
															color: party ? minecraftColorToHex(party.color) : ''
														}}
													>
														{party.name}
													</span>
												</TableCell>}
											</TableRow>
										);
									})}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}

export default MatchTeams;
