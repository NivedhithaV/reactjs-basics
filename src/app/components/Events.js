import React from "react";
import PropTypes from 'prop-types';

export class Events extends React.Component {

	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0
		};
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
		// this.age += 3;
		console.log(this.state.age);
	}

	onMakeYounger() {
		this.setState({
			age: this.state.age - 3
		});
		console.log(this.state.age);
	}

	render() {
		return (
			<div>
				<p>Events Component</p>
				<p>Your name is {this.props.name}, your age is <b>{this.state.age}</b>.
				   Status: {this.state.status}</p>
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
	initialAge: PropTypes.number
};