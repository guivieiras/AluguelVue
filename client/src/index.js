import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logo from './public/two-houses.svg';
import database from './database.js';

console.log(database);
var ojb = {}
ojb.dados = database;


ReactDOM.render(<App casas={database}/> , document.getElementById('root'));
document.getElementById('logo').setAttribute('src', logo);

registerServiceWorker();
