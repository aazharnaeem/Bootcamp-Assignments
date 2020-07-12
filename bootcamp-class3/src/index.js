import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App name='Azhar' age='20' address='karachi' />
    <App name='Ahmed' age='19' address='lhr' />
    <App name='Daniyal' age='21' address='isb' />
    <App name='Ali' age='18' address='fsl' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
