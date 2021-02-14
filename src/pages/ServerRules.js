import React, { Component } from 'react';

class ServerRules extends Component {
	render() {
		return (
			<div className='page'>
				<div className='container'>
					<div>
						<h1>Server Rules</h1>
						<span className='bold'>
							This page was last updated on February 14th, 2021 (revamped).
						</span>
						<p>
							Failure to abide by any of the rules listed on this page may
							result in a punishment for your Minecraft or Discord account. If
							you have any questions about a rule, please contact a staff member
							on our Discord server for more information.
						</p>
					</div>
					<hr />
					<div>
						<h2>General Composure</h2>
						<ol>
							<li>
								Ensure that you are respectful to all players and are
								maintaining a calm and positive atmosphere while on our server.
								Harassment and bullying are not allowed.
							</li>
							<li>
								Toxic behavior such as acting negatively towards others, being a
								bad sportsman, and disrespecting others is not allowed. We aim
								to provide all players with a safe and relaxed environment;
								Toxicity has no place on Warzone.
							</li>
							<li>
								Leaking players' personal information is not allowed. This
								includes, but is not limited to, IP addresses, home addresses
								and phone numbers.
							</li>
							<li>
								Be aware that others may find excessive profanity repulsive and
								disrespectful. While we're lenient when it comes to swearing, we
								ask that you do not direct profanity towards other players.
							</li>
							<li>
								Advertising and self-promoting are not allowed. This includes
								promoting Minehut servers, external Minecraft servers, YouTube
								channels, and Discord servers.
							</li>
							<li>
								Keep in mind that this is not a market. In order to protect our
								players from scams and other financial offenses, selling,
								soliciting, and/or buying anything through our services (that is
								not from our official store) are not allowed. By extension,
								scamming or defrauding other players is not allowed.
							</li>
							<li>
								Discrimination of any kind is not allowed. This includes
								discrimination based on gender, race, disability, religion,
								sexual orientation, and other protected groups.
							</li>
							<li>
								Using excessive capitalization in chat, flooding the chat and
								spamming the chat are all not allowed.
							</li>
							<li>
								Evading punishments is not allowed. This includes using
								alternate accounts to join our Discord or Minecraft server when
								banned. Users who are muted in-game are not permitted to chat in
								our <span className='white'>#server-chat</span> Discord bridging
								channel.
							</li>
							<li>
								We ask that you are respectful toward members of the staff team,
								as you would be to normal players. Make sure to follow
								instructions from staff.
							</li>
							<li>Encouraging other players to break rules is not allowed.</li>
							<li>
								Impersonating staff members on any platform by rank,
								association, or name is not allowed.
							</li>
							<li>
								Threatening other players or the server is not allowed. This
								includes (D)DoS Threats, Dox threats, Death threats and other
								threats of that nature.
							</li>
						</ol>
					</div>
					<div>
						<h2>General Gameplay</h2>
						<ol>
							<li>You must have an appropriate username and skin.</li>
							<li>
								Do not attempt to harm your team. This includes game throwing
								(intentionally losing a game) and team griefing (breaking blocks
								under teammates, stealing from chests, sabotaging your team's
								defences, preventing your team from achieving objectives, etc.).
							</li>
							<li>
								Map and statistic abuse are not allowed. This includes grinding
								alt accounts, spawn killing, leaving the game just before being
								killed, switching teams just before you lose, and anything
								similar that may positively affect your stats above other
								players on the server are not allowed.
							</li>
							<li>
								Client modifications that give you an unfair advantage over
								other players are not allowed. Unofficial clients such as
								Badlion Client and Lunar Client are considered "use at your own
								risk." Purely aesthetic mods such as OptiFine, 5zig, and LabyMod
								are allowed.
							</li>
							<li>
								Macros, autoclickers, multiple attack functions, physical
								hardware or software modifications to allow automated clicking,
								modifications of standard hardware limitations, etc. are not
								allowed. Any number of clicks beyond one click at a time is not
								allowed, which means butterfly clicking and drag clicking are
								both not allowed.
							</li>
						</ol>
					</div>
					<div>
						<h2>Discord</h2>
						<ol>
							<li>
								Please keep all channels on topic. Be sure to check the pinned
								messages in each channel you use.
							</li>
							<li>
								Keep all names, pictures (including profile pictures), and
								messages appropriate. NSFW content is not allowed.
							</li>
							<li>
								The use of voice changers and soundboards is not allowed.
								Additionally, turn on push to talk when necessary for
								consideration of other players.
							</li>
						</ol>
					</div>
					<div>
						<h2>Forums</h2>
						<ol>
							<li>
								Participating in reports or appeals threads that you are not
								directly involved is not allowed.
							</li>
							<li>All posts should be on topic.</li>
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
						<a
							href='https://forums.minehut.com/forum/33-appeals/?ct=1611842576'
							className='white bold underline'
							style={{ paddingRight: '10px' }}
						>
							Appeal a punishment
						</a>
						<a
							href='https://forums.minehut.com/forum/34-reports/'
							className='white bold underline'
							style={{ paddingRight: '10px' }}
						>
							Report a player
						</a>
						<a href='https://warz.one/discord' className='white bold underline'>
							Contact staff
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ServerRules;
