import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../styles/pages/play.css';

class Play extends Component {
	async copyHostToClipboard(text) {
		if (!navigator.clipboard) return this.fallbackCopyHostToClipboard(text);
		await navigator.clipboard.writeText(text);
		console.log('done');
	}

	fallbackCopyHostToClipboard(text) {
		var textArea = document.createElement('textarea');
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		try {
			document.execCommand('copy');
		} catch (err) {
			console.error('Unable to copy', err);
		}

		document.body.removeChild(textArea);
	}

	render() {
		return (
			<div className='page center play'>
				<div className='play-background'>
					<div className='container'>
						<h1 className='white'>Join Warzone to practice anytime</h1>

						<h2 className='font-weight-500'>
							Connect to{' '}
							<span className='play-highlight white'>
								<Tooltip
									disableFocusListener
									disableTouchListener
									title='Click to copy'
									placement='right'
								>
									<input
										onClick={() => this.copyHostToClipboard('play.warz.one')}
										type='button'
										className='play-connect-button'
										value='play.warz.one'
									/>
								</Tooltip>
							</span>
						</h2>

						<h3 className='white'>
							with Minecraft <span className='play-highlight'>1.8+</span>
						</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Play;
