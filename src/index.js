import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import './styles/simple-grid.css';
import App from './App';
import conf from './config.json';

export const config = conf;
console.log('Using API ' + config.API_BASE);

ReactDOM.render(<App />, document.getElementById('root'));
