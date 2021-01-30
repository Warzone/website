import React, { Component } from 'react';

class ServerRules extends Component {
	render() {
		return (
			<div className='page'>
				<div className='container'>
					<div>
						<h1>Server Rules</h1>
						<span className='bold'>
							This page was last updated on January 30th, 2021.
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
								helping to maintain Warzone's calm atmosphere while on our server.
								Harassment and bullying are not allowed.
							</li>
							<li>
								Toxic behavior while on any of our platforms is not allowed. 
								Toxic behavior can be considered as showing bad sportsmanship, 
								disrespecting others, and acting in a demeaning way towards others.
								We aim to provide all users with a safe and relaxed environment;
								Warzone has no room for toxicity.
							</li>
							<li>
								Revealing personal information is not allowed. This includes, but 
								is not limited to, IP addresses, home addresses and phone numbers.
								Doing so may result in immediate removal from all Warzone platforms.
							</li>
							<li>
								Threatening other players or the server is not allowed. This
								includes (D)DoS Threats, Dox threats, Death threats or other
								threats of that nature.
							</li>
							<li>
								Be aware that others may find excessive profanity unwelcoming
								and repulsive. While we're lenient when it comes to swearing,
								we ask that you do not direct profanity towards other community
								members.
							</li>
							<li>
								Advertisement and self promotion is strictly prohibited.
								This includes Minecraft or Discord servers, and any form of
								social media.
							</li>
							<li>
								Utilizing our platforms as a marketplace will not be tolerated.
								Purchasing, selling, or soliciting anything through our services 
								is not allowed (only if you are not purchasing from our official store).
								Keep in mind that this is not a market.
							</li>
							<li>
								Discrimination of any kind is not allowed. This includes
								discrimination based on gender, race, disability, religion,
								sexual orientation, and other protected groups.
							</li>
							<li>
								Using excessive capitalization in chat, flooding chat, inciting spam 
								or engaging in spam, is not allowed. 
							</li>
							<li>
								Evading punishments is not allowed. This includes using
								alternate accounts to join our Discord or Minecraft server to
								evade a punishment. Users who are muted in-game are not
								permitted to chat in our{' '}
								<span className='white'>#server-chat</span> Discord bridging
								channel.
							</li>
							<li>
								Encouraging other players to break rules is not allowed. If a
								player breaks a rule following your directions, you may also be
								responsible.
							</li>
							<li>
								We ask that you are respectful toward members of the staff team,
								as you would be to a normal player. Make sure to follow instructions from staff.
							</li>
							<li>
								Impersonating staff members on any platform by rank,
								association, or name is not allowed.
							</li>
						</ol>
					</div>
					<div>
						<h2>General Gameplay</h2>
						<ol>
							<li>You must have an appropriate username and skin.</li>
							<li>
								Do not try to harm your team. This includes game throwing
								(intentionally losing a game), cross teaming (teaming with opponents),
								and team griefing (breaking blocks under teammates, stealing from chests, 
								destroying your team's side and preventing your team from achieving objectives, etc.).
							</li>
							<li>
								Map/statistic abuse such as grinding alt accounts, spawn
								killing, leaving the game just before being killed, switching
								teams just before you lose, and anything similar that may
								positively affect your stats above other players on the server
								are not allowed.
							</li>
							<li>
								Client modifications that give you an unfair advantage over
								other players are not allowed, including the use of toggle sneak within Infection. 
								Unofficial clients (like BadlionClient) are "use at your own risk". 
								Mods that purely affect your client visually are allowed (e.g. OptiFine, 5zig, LabyMod). 
							</li>			
							<li>
								Macros, autoclickers, multiple attack functions, physical
								hardware or software modifications to allow automated clicking,
								changing standard mouse settings, modifications to standard
								hardware limitations, etc. are not allowed. Any clicks beyond
								one click at a time is not allowed; butterfly clicking and drag
								clicking are both unacceptable clicking methods.
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
								If you are not the creator of a report or an appeal, you may not post replies unless you are a staff member.
							</li>
							<li>
								Both the Reports & Appeals forum categories are strictly for reports & appeals. You may not
								post anything unrelated.
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
