import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
