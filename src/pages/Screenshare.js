import React, { Component } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

class Screenshare extends Component {
	render() {
		return (
			<div className='page'>
				<div className='container'>
					<Alert className='alert' severity='info'>
						Warzone has only announced the planned use of screensharing
						recently, so we are giving players time to familiarise themselves
						with the Screenshare Policy before we start screensharing. <br />
						<br /> Warzone will not commence screensharing until{' '}
						<span class='bold'>August 10th 2021</span>.
					</Alert>
					<div>
						<h1>Screenshare Policy</h1>
						<span className='bold'>
							This page was last updated on July 15th, 2021.
						</span>
						<p>
							In an effort to combat cheating, Warzone is utilising
							'screensharing.' Screensharing is the process of scanning and
							searching through a suspected cheater's computer in order to
							detect client modifications that violate Warzone's rules.
						</p>
					</div>
					<hr />
					<div>
						<h2>Privacy Statement</h2>
						Player privacy is prioritised during a screenshare. Staff members
						conducting screenshares will not look for any information that does
						not pertain to cheat detection. That being said, Warzone does not
						guarantee sensitive information will not be encountered in the
						screenshare process. Players are expected to make sure that
						sensitive information is not stored in any folders that are related
						to Minecraft or similar. In the event that sensitive information is
						discovered, it will be kept private within the screenshare & senior
						staff.
						<br />
						<br />
						If a player requires any clarification about programs or methods
						during a screenshare, the screenshare will be paused and questions
						will be answered. Players may request to pause or stop the
						screenshare at any time.
						<br />
						<br />
						Note that all screenshares are recorded to be reviewed by senior
						staff members for quality assurance and to be referenced in the
						event of an abuse report.
						<br />
						<br />
						<span className='bold'>
							If you feel like your privacy has been violated in a Warzone
							screenshare, or have any complaints about a screenshare, please
							contact a senior staff member immediately.
						</span>
					</div>
					<div>
						<h2>Process</h2>
						<ol>
							<li>
								A suspicious player will be asked to submit to a screenshare by
								a Warzone staff member
							</li>
							<li>
								The player will join a public voice channel in the Warzone
								Discord server, to be moved into a private voice channel with
								staff
							</li>
							<li>
								Once the player and screenshare staff are in the voice channel,
								the player will be asked to share their entire screen on Discord
							</li>
							<li>
								The player will be asked to install AnyDesk, a program that
								provides remote desktop access to the staff member performing
								the screenshare
							</li>
							<li>
								During the screenshare, the screenshare staff may install
								trusted programs listed on this page that aid in the cheat
								detection process
							</li>
							<li>
								Once the Warzone staff members have come to a conclusion, the
								screenshare will end, and further information will be given by
								the screenshare staff
							</li>
						</ol>
					</div>
					<div>
						<h2>Failure</h2>
						Doing or being caught with any of the following during a screenshare
						without staff approval will result in an automatic screenshare
						failure and consequently a ban from the server:
						<ul style={{ listStylePosition: 'inside', marginLeft: 25 }}>
							<li>Using a FAT filesystem</li>
							<li>Using VeraCrypt or other disk encryption programs</li>
							<li>
								Found traces of clients or autoclickers used before or while
								playing on Warzone
							</li>
							<li>Having Windows services disabled</li>
							<li>
								Failing to join the Discord voice channel within five minutes of
								being asked
							</li>
							<li>
								Logging out of the server after being asked to screenshare (up
								to staff discretion)
							</li>
							<li>
								Clearing or modifying your recycle bin immediately before a
								screenshare
							</li>
							<li>
								Deleting, modifying or moving files that screenshare staff deem
								suspicious
							</li>
							<li>Configuring antivirus or firewall settings</li>
							<li>Opening or closing programs</li>
							<li>Configuring game settings</li>
							<li>
								Configuring controls, key bindings or peripherals (e.g. mouse
								sensitivity)
							</li>
							<li>Connecting or disconnecting external devices</li>
							<li>
								Stalling the screenshare or failing to comply with instructions
								from the screenshare staff
							</li>
							<li>
								Restarting Windows services or processes in an attempt to
								obstruct the screenshare
							</li>
							<li>Using applications that interfere with screenshare tools</li>
							<li>
								Recording the screenshare (after one warning from staff);
								passive recording programs such as NVIDIA Shadowplay are also
								not allowed{' '}
							</li>
							<li>Leaving the screenshare</li>
							<li>Admitting to cheating</li>
						</ul>
						Sharing information about the screenshare process that is not
						publicly available on this page at any point may result in a
						punishment.
					</div>
					<div>
						<h2>Who We Screenshare</h2>
						<ul style={{ listStylePosition: 'inside', marginLeft: 25 }}>
							<li>
								Warzone staff do not screenshare players upon player request
							</li>
							<li>
								A player who has already been screenshared may be screenshared
								again in the future
							</li>
							<li>
								Warzone staff may screenshare suspicious players who have been
								reported if there is insufficient evidence to issue a punishment
							</li>
							<li>
								The Warzone staff team maintains sole discretion in regards to
								deciding which players will be asked to submit to a screenshare
							</li>
						</ul>
					</div>
					<div>
						<h2>Software Used</h2>
						The following is a list of trusted software that may be used in a
						screenshare.
						<ul style={{ listStylePosition: 'inside', marginLeft: 25 }}>
							<li>
								<a className='bold white' href='https://paladin.ac/'>
									Paladin
								</a>{' '}
								— Investigate the Minecraft Java client (
								<a className='ss-dl' href='https://dl.pld.ac/'>
									Download Paladin
								</a>
								)
							</li>
							<li>
								<a className='bold white' href='https://avenge.ac/'>
									Avenge
								</a>{' '}
								— Investigate the Minecraft Java client (
								<a className='ss-dl' href='https://dl.avenge.ac/'>
									Download Avenge
								</a>
								)
							</li>
							<li>
								<a className='bold white' href='https://echo.ac/'>
									Echo
								</a>{' '}
								— Investigate the Minecraft Java client (
								<a className='ss-dl' href='https://dl.echo.ac/'>
									Download Echo
								</a>
								)
							</li>
							<li>
								<a className='bold white' href='https://safeshare.solutions/'>
									Safeshare
								</a>{' '}
								— Variety of bundled utilities designed to investigate program
								activity and the Minecraft Java client (
								<a className='ss-dl' href='https://safeshare.solutions/'>
									Download Safeshare
								</a>
								)
							</li>
							<li>
								<a className='bold white' href='https://anydesk.com/'>
									AnyDesk
								</a>{' '}
								— Provide remote desktop access to staff during screenshare (
								<a className='ss-dl' href='https://anydesk.com/en/downloads/'>
									Download AnyDesk
								</a>
								)
							</li>
						</ul>
						This list does not include every program that may be used by staff
						in a screenshare, but screenshare staff are bound by an internal
						list of allowed programs. Players are encouraged to research these
						programs in advance.
					</div>
					<div>
						<h2>Abuse</h2>
						Screenshares are regulated internally within the Warzone staff team
						and screenshare staff are held to a high standard.
						<br />
						<br />
						If you believe a Warzone screenshare staff member has violated your
						privacy or acted contrary to this Screenshare Policy, please contact
						a senior staff member not involved in your screenshare immediately
						on Discord.
					</div>
					<br />
					<hr />
					Our Screenshare Policy may be updated at any time, with or without
					notice. It is your responsibility to keep up-to-date with the content
					on this page.
				</div>
			</div>
		);
	}
}

export default Screenshare;
