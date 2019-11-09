import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/footer.css';

class Footer extends Component {
	render() {
		return (
			<div
				// Add .play-footer if on Play page to remove the margin top from the footer
				className={`footer${
					window.location.pathname.toLowerCase() === '/play'
						? ' play-footer'
						: ''
				}`}
			>
				<div className='container'>
					<div className='row'>
						<div className='col-4'>
							<h4 className='footer-header white left'>Site Map</h4>
							<ul className='left' style={{ listStyleType: 'none' }}>
								<li className='left'>
									<Link className='footer-link' to='/'>
										Home
									</Link>
								</li>
								<li className='left'>
									<Link className='footer-link' to='/play'>
										Play
									</Link>
								</li>
								<li className='left'>
									<Link className='footer-link' to='/leaderboard'>
										Leaderboard
									</Link>
								</li>
								<li className='left'>
									<Link className='footer-link' to='/staff'>
										Staff
									</Link>
								</li>
							</ul>
						</div>
						<div className='col-4 center footer-logo-wrapper'>
							<img
								src='/img/warzone.svg'
								alt='Warzone logo'
								className='footer-logo-image'
							/>
							<h5>
								&copy; 2019{' '}
								<Link to='/' className='footer-link'>
									Warzone
								</Link>
							</h5>
						</div>
						<div className='col-4'>
							<h4 className='footer-header white right'>Useful Links</h4>
							<ul className='right' style={{ listStyleType: 'none' }}>
								<li className='right'>
									<Link className='footer-link' to='/rules'>
										Server Rules
									</Link>
								</li>
								<li className='right'>
									<Link className='footer-link' to='/privacy'>
										Privacy Policy
									</Link>
								</li>
							</ul>
							<div className='right'>
								Servers hosted by{' '}
								<a href='https://minehut.com' className='footer-link white'>
									Minehut
								</a>
								<br />
								Originally made by{' '}
								<a
									href='https://twitter.com/lukechatton'
									className='footer-link white'
								>
									Luke Chatton
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
