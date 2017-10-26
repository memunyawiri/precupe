import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrecupeApp from './precupeApp';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<PrecupeApp />, document.getElementById('root'));
registerServiceWorker('/');
