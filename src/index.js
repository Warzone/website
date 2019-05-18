import React from 'react';
import ReactDOM from 'react-dom';
import './styles/simple-grid.css';
import './global.css';
import App from './App';
import conf from './config.json';
// import * as serviceWorker from './serviceWorker';

export const config = conf;
console.log('Using API ' + config.API_BASE);

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.register();
