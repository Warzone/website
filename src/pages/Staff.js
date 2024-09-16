import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';
import { config } from '../';
import '../styles/pages/staff.css';

const bedrock = ["*", "."];

export default function Staff() {
	const [staff, setStaff] = useState([]);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		async function fetchData() {
			if (window.sessionStorage.getItem('staff_list'))
				return setStaff(
					JSON.parse(window.sessionStorage.getItem('staff_list'))
				);
			let ranksJson, ranksRes;
			ranksRes = await fetch(`${config.API_BASE}/mc/ranks`);
			if (!ranksRes.ok) {
				return console.error('Error fetching ranks');
			}

			ranksJson = await ranksRes.json();
			if (ranksJson.notFound) return setNotFound(true);

			ranksJson = ranksJson.filter((rank) => rank.staff).sort((a,b) => a.priority - b.priority).reverse();

			ranksJson.map(async (rank, i) => {
				rank.players = [];
				const res = await fetch(
					`${config.API_BASE}/mc/ranks/${rank._id}/players`
				);
				const players = await res.json();
				rank.players = players.filter((player) => !bedrock.includes(player.name.charAt(0)));

				rank.playersLoaded = true;

				if (ranksJson.every((e) => e.hasOwnProperty('playersLoaded'))) {
					setStaff(ranksJson);
					window.sessionStorage.setItem(
						'staff_list',
						JSON.stringify(ranksJson)
					);
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
						<div className='row' key={rank.name}>
							<h2>
								{rank.displayName}{' '}
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
								<div className='col-md-3 col-sm-6' key={player.name}>
									<Link to={`/p/${player.name}`}>
										<Tooltip
											disableFocusListener
											disableTouchListener
											placement='top'
											title={player.name}
											className='staff-player-image'
										>
											<img
												className='img-rounded'
												src={`https://crafatar.com/avatars/${player.id}?helm&size=160`}
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
