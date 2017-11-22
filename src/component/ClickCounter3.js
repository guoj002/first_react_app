import React, { Component } from 'react';

import Counter from './Counter3';

class ClickCounter extends Component{
	constructor(props){
		super(props);
		this.onCounterUpdate = this.onCounterUpdate.bind(this);

		this.initValues = [ 0, 10, 20];
		const initSum = this.initValues.reduce((a, b) => a + b, 0);
		this.state = {
			sum: initSum
		};
	}

	onCounterUpdate(newValue, previousValue){
		const valueChange = newValue - previousValue;
		this.setState({ sum: this.state.sum + valueChange});
	}

	render(){
		const counterStyle = {
			margin: '16px'
		}
		return (
			<div style={counterStyle}>
				<Counter caption="First" onUpdate={this.onCounterUpdate} />
				<Counter caption="Second" onUpdate={this.onCounterUpdate} initValue={this.initValues[1]} />
				<Counter caption="Third" onUpdate={this.onCounterUpdate} initValue={this.initValues[2]} />
				<hr />
				<div>Total Count: {this.state.sum}</div>
			</div>
		);
	}
}

export default ClickCounter;

