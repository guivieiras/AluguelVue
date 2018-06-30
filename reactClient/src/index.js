import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logo from './public/two-houses.svg';
import database from './database.js';

ReactDOM.render(<App/> , document.getElementById('root'));
document.getElementById('logo').setAttribute('src', logo);

registerServiceWorker();
