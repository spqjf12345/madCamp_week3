import React, { Component } from 'react';
import '../style/Dialog.css';


export default class Dialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0,
			dragging: false,
			stylesList: [],
		}

		this._dragStart = this._dragStart.bind(this);
		this._dragging = this._dragging.bind(this);
		this._dragEnd = this._dragEnd.bind(this);
	}

	_dragStart(e, i) {
		this.setState({
			x: e.screenX - e.currentTarget.getBoundingClientRect().left,
			y: e.screenY - e.currentTarget.getBoundingClientRect().top,
			dragging: true
		});
	}

	_dragging(e, i) {
		if (this.state.dragging) {
			var left = e.screenX - this.state.x;
			var top = e.screenY - this.state.y;

			const stylesList = this.state.stylesList;
			stylesList[i] = { left: left, top: top };
			this.setState({
				stylesList: stylesList
			});
		}
	}

	_dragEnd(e, i) {
		this.setState({
			dragging: false
		});
	}

	render() {
		const currentFlowers = localStorage.getItem("flowers");
		let flowerArray;
		currentFlowers ? flowerArray = currentFlowers.split(",") : flowerArray = [];

		return (
			<div>
				{flowerArray.map((item, idx) =>
					<div
						className={"Dialog"}
						style={this.state.stylesList[idx]}
						onMouseDown={(e) => this._dragStart(e, idx)}
						onMouseMove={(e) => this._dragging(e, idx)}
						onMouseUp={(e) => this._dragEnd(e, idx)}
					>
						{item}
					</div>
				)}


			</div>
		);
	}
}



