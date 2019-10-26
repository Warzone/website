import React, { Component } from 'react';

class ServerRules extends Component {
	render() {
		return (
			<div className='page'>
				<div className='container'>
					<div>
						<h1>Server Rules</h1>
						<span className='bold'>
							This page was last updated on May 18th, 2019 (minor grammatical
							changes).
						</span>
						<p>
							Failure to follow any of the rules listed on this page may result
							in a punishment on your Minecraft or Discord account. If you have
							any questions about a rule, please contact a staff member on our
							Discord server for more information.
						</p>
					</div>
					<hr />
					<div>
						<h2>General Composure</h2>
						<ol>
							<li>
								Maintain a casual and positive atmosphere at all times. Be
								respectful of all players. Harassment and bullying are strictly
								not allowed.
							</li>
							<li>
								Be kind to other players. While we're pretty lenient when it
								comes to swearing, we ask that you do not use foul language
								towards other players.
							</li>
							<li>
								No advertising of any kind. This includes Minehut servers,
								external servers, YouTube channels, Discord servers, etc.
							</li>
							<li>
								This is not a market. To protect our users from scams and other
								financial offenses, selling, soliciting, and/or buying anything
								through our services is not allowed.
							</li>
							<li>
								Chat spamming/flooding is not allowed. Additionally, keep
								everything as appropriate as you can.
							</li>
							<li>
								Any client modifications that may give you an advantage over
								other users while in game is not permitted. Mods such as 5zig,
								Labymod, Optifine, or any other similar mod which doesn't give
								yourself a major advantage over others but may affect your
								client visually is allowed.
							</li>
							<li>
								Be respectful to staff members. If they say something, you must
								listen and abide.
							</li>
							<li>
								Do not encourage other players to break rules. If a player
								breaks a rule in response to your directions, you will be held
								accountable.
							</li>
							<li>
								Do not impersonate staff members on any service by rank,
								association, or username.
							</li>
							<li>
								Defrauding other players in any way is not allowed, either
								in-game or on the Discord server.
							</li>
							<li>
								Directed threats towards players or the server are not
								permitted. This includes (D)DoS threats, Dox threats, death
								threats, or other personal threats.
							</li>
						</ol>
					</div>
					<div>
						<h2>General Gameplay</h2>
						<ol>
							<li>You must have an appropriate username and skin.</li>
							<li>
								Do not try to harm your team. This includes game throwing
								(intentionally losing a game) and team griefing (i.e. breaking
								blocks under teammates, stealing from chests, blowing up your
								own side and preventing your team from achieving objectives).
							</li>
							<li>
								Map/stats abuse such as grinding alt accounts, spawn killing,
								leaving the game right before getting killed, switching teams
								right before you lose, and anything similar that may positively
								affect your stats above other players on the server is not
								allowed.
							</li>
							<li>
								Macros, autoclickers, multiple attack functions, physical
								hardware or software modification to allow automated clicking,
								changing standard mouse settings, modifications to standard
								hardware limitations, etc. are not permitted. Any clicks beyond
								one click at a time are not permitted, meaning butterfly
								clicking is not allowed.
							</li>
						</ol>
					</div>
					<div>
						<h2>Discord</h2>
						<ol>
							<li>
								Please keep all channels on topic. Be sure to read pinned
								messages in each channel if there are any.
							</li>
							<li>
								Keep all names, profile pictures, and chats appropriate. We do
								not allow any NSFW content on our services.
							</li>
							<li>
								Use of voice changers/soundboards is not allowed. Additionally,
								turn on push to talk when necessary for consideration of other
								players.
							</li>
							<li>
								All rules listed in the sections above also apply to the Discord
								server.
							</li>
						</ol>
					</div>
					<hr />
					<div>
						Please note that if you are IP banned in game or on our Discord
						server, all users associated with that IP address will also be
						banned. Additionally, these rules are subject to change at any time,
						without notice. It is your responsibility to keep up-to-date with
						the rules.
					</div>
					<br />
					<div>
						If you wish to{' '}
						<span className='underline'>appeal a punishment</span> or{' '}
						<span className='underline'>report a player</span>, please post in{' '}
						<a
							href='https://discord.gg/uCxjNhS'
							className='white bold no-text-decoration'
						>
							our Discord server
						</a>{' '}
						to the relevant channel.
					</div>
				</div>
			</div>
		);
	}
}

export default ServerRules;
