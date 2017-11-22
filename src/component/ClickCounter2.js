import React, { Component } from 'react';

import Counter from './Counter2';

class ClickCounter extends Component{

	render(){
		const counterStyle = {
			margin: '16px'
		}
		return (
			<div style={counterStyle}>
				<Counter caption="First" initValue={0} />
				<Counter caption="Second" initValue={10} />
				<Counter caption="Third" initValue={20} />
			</div>
		);
	}
}

export default ClickCounter;

