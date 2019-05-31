import {config} from './modules/config'
import AppService from './modules/app.service'
//import './modules/headr.component' //in App.js
import './css/style.css'
import './less/style.less'
import './scss/style.scss'
import './modules/ts.module'
import React from 'react'
import {render} from 'react-dom'
import App from './App'

console.log('Hello, bro!');
console.log('Config key: ', config.key);

const service = new AppService('Hello Service!');
service.log();

render(<App/>, document.getElementById('app'))
