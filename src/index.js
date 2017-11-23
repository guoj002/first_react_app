import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component/ClickCounter3';
// import App from './fluxDemo/views/ControlPanel';
import App from './reduxDemo/views/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
