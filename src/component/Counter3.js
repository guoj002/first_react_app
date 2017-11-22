import React, { Component } from 'react';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

	constructor(props){
		super(props);

		this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
		this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
		this.updateCount = this.updateCount.bind(this);

		this.state = {
			count: props.initValue
		};
	}

	onClickIncrementButton(){
		this.updateCount(true);
	}

	onClickDecrementButton(){
		this.updateCount(false);
	}

	updateCount(isIncrement){
		const previousValue = this.state.count;
		const newValue = isIncrement ? previousValue + 1 : previousValue -1;
		this.setState({count: newValue});
		this.props.onUpdate(newValue, previousValue);
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
	// onUpdate: PropTypes.func
};

Counter.defaultProps = {
	initValue: 0,
	onUpdate: f=> f
};

export default Counter;
