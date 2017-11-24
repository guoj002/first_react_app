import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//版本三
function Summary({value}){
    return (
      	<div>Total Count: {value}</div>
    );
}

Summary.PropTypes = {
  value: PropTypes.number.isRequired
};

function mapStateToProps(state) {
	let sum = 0;
	for (const key in state) {
		if (state.hasOwnProperty(key)) {
			sum += state[key];
		}
	}
	return {value: sum};
}

export default connect(mapStateToProps)(Summary);
