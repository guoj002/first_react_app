import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        value: state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps.caption));
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
