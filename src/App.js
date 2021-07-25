import React, { Component } from 'react';
import Router from './Router';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const darkTheme = createTheme({
	palette: {
		type: 'dark'
	}
});

class App extends Component {
	render() {
		return (
			<div>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Router />
				</ThemeProvider>
			</div>
		);
	}
}

export default App;
