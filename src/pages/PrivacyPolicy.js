import React, { Component } from 'react';

class PrivacyPolicy extends Component {
	render() {
		return (
			<div className='page'>
				<div className='container'>
					<div>
						<h1>Privacy Policy</h1>
						<span className='bold'>
							This page was last updated on May 19th, 2019 (minor grammatical
							changes).
						</span>
						<p>
							By using our (Warzone) Service, information may be collected
							and/or stored in numerous ways:
						</p>
					</div>
					<hr />
					<div>
						<h2>Information Collection</h2>
						<ol>
							<li>
								Any statistics, participation in matches, and other
								gameplay-related events are compiled to allow for profile pages
								and match pages.
							</li>
							<li>
								Any messages you send to the server are stored on our Discord
								server and stored in match pages for moderation purposes.
							</li>
							<li>
								Any purchases made in our store are processed directly through
								3rd party services (PayPal, Stripe and Xsolla) and not the
								Warzone administration. We do not store your personal card
								information on our Services, nor do we have access to it.
								Additionally, we have a right to block you from using our
								Service if you chargeback on our store without notifying a staff
								member.
							</li>
							<li>
								Any reports and appeals made are available in Discord for
								moderation purposes. Moderators will respond accordingly to any
								reports and/or appeals you may make, and other users may have
								the ability to see them.
							</li>
							<li>
								We store a hash of your IP address in our database for
								moderation purposes.
							</li>
							<li>
								Any information you add to your Discord profile while on our
								Service is entirely optional and is handled by Discord
								exclusively: we will not infringe and/or change any of your
								information. To see Discord's privacy policy, please{' '}
								<a className='bold white' href='https://discordapp.com/privacy'>
									visit this page
								</a>
								.
							</li>
						</ol>
					</div>
					<div>
						<h2>Policy Modification</h2>
						<ol>
							<li>
								We reserve the right to update or modify this Privacy Policy
								with or without prior notice. It is your sole responsibility to
								stay updated with this page and to be responsible with any
								information that you may provide on our Services (such as being
								mindful of what you send). You will always be able to see the
								last revision to the Privacy Policy on the given date above, and
								by continuing usage of Warzone Services, you are complying with
								the current revisions of our Privacy Policy.
							</li>
						</ol>
					</div>
					<div>
						<h2>Contact Us</h2>
						If you have any questions or wish to seek clarification about our
						Privacy Policy, please contact a staff member in{' '}
						<a className='bold white' href='https://warz.one/discord'>
							our Discord server
						</a>
						.
					</div>
				</div>
			</div>
		);
	}
}

export default PrivacyPolicy;
