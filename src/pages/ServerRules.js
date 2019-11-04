import React, { Component } from 'react';

class ServerRules extends Component {
	render() {
		return (
			<div className='page'>
				<div className='container'>
					<div>
						<h1>Server Rules</h1>
						<span className='bold'>
							This page was last updated on November 4th, 2019 (revamped)
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
								Ensure that you are respectful to all players and are maintaining
								a calm and positive atmosphere while on our server. 
								Any forms of harassment or bullying are strictly forbidden. Don't be toxic.
							</li>
							<li>
								Be aware that others may find excessive profanity repulsive and 
								disrespectful. While we're lenient when it comes to swearing, we 
								ask that you do not direct profanity towards other players.
							</li>
							<li>
								Advertising in any way is not allowed. This includes Minehut servers, 
								external Minecraft servers, YouTube channels and Discord servers.
								If you are wondering if you are able to advertise anything not listed
								in this section, ask a staff member on our Discord.
							</li>
							<li>
								Keep in mind that this is not a market. In order to protect our players 
								from scamming and other financial offenses, selling, soliciting,
								and/or buying anything through our services is not allowed.
							</li>
							<li>
								Discrimination, excessive capitalization, chat flood and spamming 
								are all punishable offenses. 
							</li>
							<li>
								Client modifications that give you an unfair advantage over other players
								are not permitted. You are allowed to use clients similar to the famous
								Badlion Client, as they do not naturally give you an unfair advantage.
								Modifications that positively affect your client visually are allowed
								(e.g. Optifine).
							</li>
							<li>
								We ask that you are respectful towards members of the staff team. 
								They should be treated like any normal person, they have feelings too.
								Make sure to abide by the instructions they give you.
							<li>
								Do not encourage other players to break rules. If a player
								breaks a rule in response to your directions, you will be held
								accountable.
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
								permitted. This includes D(Dos) Threats, Dox threats, Death threats, 
								Swat threats and any other threat.
							</li>
						</ol>
					</div>
					<div>
						<h2>General Gameplay</h2>
						<ol>
							<li>
								You must have an appropriate username and skin.
								If you are banned, change your username/skin and appeal. 
								You will be unbanned.
							</li>
							<li>
								Do not try to harm your team.
								Intentionally losing a match, killing your teammates & preventing
								teammates to complete the objective is not allowed.
							</li>
							<li>
								Grinding alt accounts, spawn killing, leaving before getting killed,
								switching teams prior to a loss and anything similar that may unfairly
								affect your statistics in a positive way is not allowed. This is 
								identified as stat abuse.
							</li>
							<li>
								Macros, autoclickers, multiple attack functions, physical
								hardware or software modifications to allow automated clicking,
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
							href='https://warz.one/discord'
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
