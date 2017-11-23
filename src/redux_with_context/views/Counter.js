import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Actions from '../Actions.js';

const buttonStyle = {
  margin: '10px'
};

//展示组件
//无状态组件 版本三
//把解构赋值直接放在参数部分
function Counter({caption, onIncrement, onDecrement, value}){
    return(
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    );
}

//容器组件
class CounterContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: this.context.store.getState()[this.props.caption]
        };
    }

    onIncrement() {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement() {
        this.context.store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }

    render(){
        return(
            <Counter caption={this.props.caption}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
                value={this.state.value} />
        ) 
    }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterContainer;
