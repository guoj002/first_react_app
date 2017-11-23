import React, { Component } from 'react';

import store from '../Store.js';
import * as Actions from '../Actions.js';

const buttonStyle = {
  margin: '10px'
};

//展示组件
//无状态组件 版本一
// class Counter extends Component{
//     render(){
//         const {caption, onIncrement, onDecrement, value} = this.props;

//         return(
//             <div>
//                 <button style={buttonStyle} onClick={onIncrement}>+</button>
//                 <button style={buttonStyle} onClick={onDecrement}>-</button>
//                 <span>{caption} count: {value}</span>
//             </div>
//         );
//     }
// }

//无状态组件 版本二
//React支持只用一个函数代表的无状态组件
// function Counter(props){
//     const {caption, onIncrement, onDecrement, value} = props;

//     return(
//         <div>
//             <button style={buttonStyle} onClick={onIncrement}>+</button>
//             <button style={buttonStyle} onClick={onDecrement}>-</button>
//             <span>{caption} count: {value}</span>
//         </div>
//     );
// }

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
    constructor(props) {
        super(props);

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        };
    }

    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
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

export default CounterContainer;
