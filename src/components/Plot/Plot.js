/* global Plotly */ 

import React, { Component } from 'react';

export default class Plot extends Component {
	render() {
		return (
			<div id="plot">
				Plot
			</div>
		);
	}

	componentDidMount(){
		Plotly.newPlot('plot');
	}
}
