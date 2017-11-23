import React, { Component } from 'react';

import store from '../Store.js';
import * as Actions from '../Actions.js';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component{

	constructor(props){
		super(props);
		
		this.onIncrement = this.onIncrement.bind(this);
	    this.onDecrement = this.onDecrement.bind(this);
	    this.onChange = this.onChange.bind(this);
	    this.getOwnState = this.getOwnState.bind(this);

		this.state = this.getOwnState();
	}
	//初始化this.state的来源
	getOwnState(){
		return {
			value: store.getState()[this.props.caption]
		};
	}
	//改变store中状态，进行派发action
	onIncrement(){
		store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement(){
		store.dispatch(Actions.decrement(this.props.caption));
	}
	//保持store上状态和this.state的同步
	onChange(){
		this.setState(this.getOwnState());
	}

	shouldComponentUpdate(nextProps, nextState) {
	    return (nextProps.caption !== this.props.caption) ||
	      (nextState.value !== this.state.value);
	}
	//添加监听
	componentDidMount(){
		store.subscribe(this.onChange);
	}
	//注销监听
	componentWillUnmount(){
		store.unsubscribe(this.onChange);
	}
	//JSX
	render(){
		const value = this.state.value;
		const {caption} = this.props;

		return(
			<div>
				<button style={buttonStyle} onClick={this.onIncrement}>+</button>
				<button style={buttonStyle} onClick={this.onDecrement}>-</button>
				<span>{caption} count: {value}</span>
			</div>
		);
	}
}

export default Counter;