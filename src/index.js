import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './grid.css';
import App from './App';
import conf from './config.json';

export const config = conf;
console.log('Using API ' + config.API_BASE);

ReactDOM.render(<App />, document.getElementById('root'));
