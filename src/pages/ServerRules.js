import React, { Component } from 'react';

class ServerRules extends Component {
	render() {
		return (
			<div className='page'>
				<div className='container'>
					<div>
						<h1>Server Rules</h1>
						<span className='bold'>
							This page was last updated on November 21st, 2019 (revamped).
						</span>
						<p>
							Failure to abide by any of the rules listed on this page may
							result in punishment for your Minecraft or Discord account. If you
							have any questions about a rule, please contact a staff member on
							our Discord server for more information.
						</p>
					</div>
					<hr />
					<div>
						<h2>General Composure</h2>
						<ol>
							<li>
								Ensure that you are respectful to all players and are
								maintaining a calm and positive atmosphere while on our server.
								Any forms of harassment or bullying are strictly forbidden.
							</li>
							<li>
								Toxic behavior such as acting negatively towards others, being a
								bad sportsman, and disrespecting others is not allowed. We aim
								to provide all players with a safe and relaxed environment;
								Warzone has no room for toxicity.
							</li>
							<li>
								Do not leak personal information. Sharing someone's IP address,
								phone number or other commonly hidden information will result in
								a blacklist. Your access to our Discord server and Minecraft
								server will be permanently taken away.
							</li>
							<li>
								Be aware that others may find excessive profanity repulsive and
								disrespectful. While we're lenient when it comes to swearing, we
								ask that you do not direct profanity towards other players.
							</li>
							<li>
								Advertising is not allowed. This includes Minehut servers,
								external Minecraft servers, YouTube channels, and Discord
								servers.
							</li>
							<li>
								Keep in mind that this is not a market. In order to protect our
								players from scamming and other financial offenses, selling,
								soliciting, and/or buying anything through our services is not
								allowed.
							</li>
							<li>Discrimination of any kind will not be tolerated.</li>
							<li>
								The use of excessive capitalization, flooding chat with
								characters, and spamming are all punishable offenses.
							</li>
							<li>
								Client modifications that give you an unfair advantage over
								other players are not permitted. Unofficial clients (like
								Badlion Client) are "use at your own risk". Mods that affect
								your client visually are allowed (e.g. OptiFine, 5zig, LabyMod).
							</li>
							<li>
								We ask that you are respectful towards members of the staff
								team, as you would a normal player. Make sure to abide by the
								instructions they give you.
							</li>
							<li>
								Do not encourage other players to break rules. If a player
								breaks a rule in response to your directions, you may also be
								held accountable.
							</li>
							<li>
								Do not impersonate staff members on any platform by rank,
								association, or username.
							</li>
							<li>
								Defrauding other players in any way is not allowed, either
								in-game or on the Discord server.
							</li>
							<li>
								Directed threats towards players or the server are not
								permitted. This includes (D)DoS Threats, Dox threats, Death
								threats or other personal threats.
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
								blocks under teammates, stealing from chests, destroying your
								team's side and preventing your team from achieving objectives).
							</li>
							<li>
								Map/stats abuse such as grinding alt accounts, spawn killing,
								leaving the game right before getting killed, switching teams
								right before you lose, and anything similar that may positively
								affect your stats above other players on the server are not
								allowed.
							</li>
							<li>
								Macros, autoclickers, multiple attack functions, physical
								hardware or software modifications to allow automated clicking,
								changing standard mouse settings, modifications to standard
								hardware limitations, etc. are not permitted. Any clicks beyond
								one click at a time is not permitted, meaning butterfly clicking
								is not allowed.
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
								The use of voice changers and soundboards is not allowed.
								Additionally, turn on push to talk when necessary for
								consideration of other players.
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
						<span className='underline'>report a player</span>, please post a
						thread in their respective categories (appeals, reports){' '}
						<a
							href='https://forums.minehut.com/clubs/23-warzone/'
							className='white bold no-text-decoration'
						>
							on our forums
						</a>{' '}
					</div>
				</div>
			</div>
		);
	}
}

export default ServerRules;
