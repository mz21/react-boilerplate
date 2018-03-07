import React from 'react';
import ReactDOM from 'react-dom';
import './globals/sanitize.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
