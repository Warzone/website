import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';
import { config } from '../';
import '../styles/pages/staff.css';

export default function Staff() {
	const [staff, setStaff] = useState([]);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		async function fetchData() {
			let ranksJson, ranksRes;
			ranksRes = await fetch(`${config.API_BASE}/mc/ranks`);
			if (!ranksRes.ok) {
				return console.error('Error fetching ranks');
			}

			ranksJson = await ranksRes.json();
			if (ranksJson.notFound) return setNotFound(true);

			ranksJson = ranksJson.filter((rank) => {
				return !!rank.staff;
			});

			ranksJson.reverse().map(async (rank, i) => {
				rank.name = rank.name.charAt(0).toUpperCase() + rank.name.slice(1);

				rank.players = [];
				let res = await fetch(
					`${config.API_BASE}/mc/rank/${rank.name}/players`
				);
				let json = await res.json();
				rank.players = json.users;

				if (rank.players[i] !== []) rank.playersLoaded = true;

				if (ranksJson.every((e) => e.hasOwnProperty('playersLoaded'))) {
					setStaff(ranksJson);
					console.log(ranksJson);
				}
			});
		}

		fetchData();
	}, []);

	return (
		<div className='page'>
			<div className='container'>
				<div>
					{notFound && <NotFound />}
					{staff.length === 0 && !notFound && (
						<div className='center'>
							<CircularProgress />
						</div>
					)}
					{staff.length > 0 && (
						<div>
							<h1 style={{ marginBottom: '0px' }}>
								Staff{' '}
								<small style={{ fontSize: '17px', fontWeight: 'normal' }}>
									People who help keep the server running
								</small>
							</h1>
							<hr />
						</div>
					)}

					{staff.map((rank) => (
						<div class='row'>
							<h2>
								{rank.display}{' '}
								<small
									style={{
										fontSize: '13px',
										color: 'white',
										userSelect: 'none'
									}}
								>
									{rank.players.length}
								</small>
							</h2>
							{rank.players.map((player) => (
								<div class='col-md-3 col-sm-6'>
									<Link to={`/p/${player.name}`}>
										<Tooltip
											disableFocusListener
											disableTouchListener
											placement='top'
											title={player.name}
											className='staff-player-image'
										>
											<img
												class='img-rounded'
												src={`https://crafatar.com/avatars/${player.uuid}?helm&amp;size=160`}
												style={{ width: '120px', borderRadius: '10px' }}
												alt='Staff head'
											/>
										</Tooltip>
									</Link>
								</div>
							))}
						</div>
					))}

					<p>
						To get in contact with staff, please join{' '}
						<a className='bold white' href='https://warz.one/discord'>
							our Discord server
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
