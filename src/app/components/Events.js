import React from "react";
import PropTypes from 'prop-types';

export class Events extends React.Component {

	constructor(props) {
		super();
		this.age = props.age;
	}

	onMakeOlder() {
		this.age += 3;
		console.log(this.age);
	}

	onMakeYounger() {
		this.age -= 3;
		console.log(this.age);
	}

	render() {
		return (
			<div>
				<p>Events Component</p>
				<p>Your name is {this.props.name}, your age is {this.age}</p>
				<hr/>
				<button className="btn btn-primary"
						onClick={this.onMakeOlder.bind(this)}>
					Make me older!
				</button>
				<hr/>
				<button className="btn btn-primary"
						onClick={() => this.onMakeYounger()}>
					Make me younger!
				</button>
			</div>

		);
	}
}

Events.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number
};