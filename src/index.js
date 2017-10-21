import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrecupeApp from './PrecupeApp';
import NewRecipe from './NewRecipe'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<PrecupeApp />, document.getElementById('root'));
registerServiceWorker('/');
