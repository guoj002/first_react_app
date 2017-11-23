import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component/ClickCounter3';
// import App from './fluxDemo/views/ControlPanel';
import App from './reduxDemo/views/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

import store from './redux_with_context/Store.js';
import Provider from './redux_with_context/Provider.js';

ReactDOM.render(
		// <Provider store={store}>
		// 	<App />
		// </ Provider>,
		<App />,
		document.getElementById('root')
	);
registerServiceWorker();
