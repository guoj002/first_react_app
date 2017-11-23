import React, { Component } from 'react';

import store from '../Store.js';

//版本一
// class Summary extends Component {
// 	render() {
// 	    return (
// 	      	<div>Total Count: {this.props.sum}</div>
// 	    );
//   	}
// }

//版本二
// function Summary(props){
//     return (
//       	<div>Total Count: {props.sum}</div>
//     );
// }

//版本三
function Summary({sum}){
    return (
      	<div>Total Count: {sum}</div>
    );
}

class SummaryContainer extends Component{
	constructor(props) {
	    super(props);

	    this.onChange = this.onChange.bind(this);

	    this.state = this.getOwnState();
	}

	getOwnState(){
		const state = store.getState();
		let sum = 0;
		for(const key in state){
			if(state.hasOwnProperty(key)){
				sum += state[key];
			}
		}
		return {sum: sum};
	}

	onChange() {
	    this.setState(this.getOwnState());
	}

	shouldComponentUpdate(nextProps, nextState) {
	    return nextState.sum !== this.state.sum;
	}

	componentDidMount() {
	    store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	    store.unsubscribe(this.onChange);
	}

	render() {
	    return (
	    	<Summary sum={this.state.sum}></Summary>
	    );
	}
}

export default SummaryContainer;
