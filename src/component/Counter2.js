import React, { Component } from 'react';

const buttonStyle = {
	margin: '10px'
};

class Counter extends Component {

	constructor(props){
		super(props);

		this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
		this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

		this.state = {
			count: props.initValue
		};
	}

	onClickIncrementButton(){
		this.setState({count: this.state.count + 1});
	}

	onClickDecrementButton(){
		this.setState({count: this.state.count - 1});
	}

	render(){
		const { caption } = this.props;
		return (
			<div>
				<button style={buttonStyle} onClick={this.onClickIncrementButton}> + </button>
				<button style={buttonStyle} onClick={this.onClickDecrementButton}> - </button>
				<span>{ caption } Count: {this.state.count} </span>
			</div>
		);
	}
}

Counter.propTypes = {
	// caption: PropTypes.string.isRequired,  //15.5之后废弃
	// initValue: PropTypes.number
};

Counter.defaultProps = {
	initValue: 0
};

export default Counter;
