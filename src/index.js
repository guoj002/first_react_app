import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
// import App from './component/ClickCounter3';
// import App from './fluxDemo/views/ControlPanel';
// import App from './reduxDemo/views/ControlPanel';
// import App from './redux_with_context/views/ControlPanel';
import App from './react-redux_demo/views/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

// import store from './redux_with_context/Store.js';
// import Provider from './redux_with_context/Provider.js';
import store from './redux_with_context/Store.js';

ReactDOM.render(
		<Provider store={store}>
			<App />
		</ Provider>,
		document.getElementById('root')
	);
registerServiceWorker();
