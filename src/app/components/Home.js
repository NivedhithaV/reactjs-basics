import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = {
			homeLink: "Changed Home"
		};
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	render() {
		console.log(this.props);
		const birthYear = new Date().getFullYear() - this.props.age;

		return (
			<div>
				<p>Home Component</p>
				<p>Your name is {this.props.name}</p>
				<p>You were born in {birthYear}</p>
				<p>User object => Name: {this.props.user.name}</p>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<hr/>
				{this.props.children}
				<hr/>
				<button onClick={this.props.greet}
						className="btn btn-primary">
					Greet
				</button>
				<hr/>
				<button className="btn btn-primary"
						onClick={this.onChangeLink.bind(this)}>
					Change Header Link
				</button>
				<hr/>
			</div>
		);
	}
}

Home.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	user: PropTypes.object,
	children: PropTypes.element.isRequired,
	greet: PropTypes.func,
	changeLink: PropTypes.func
};