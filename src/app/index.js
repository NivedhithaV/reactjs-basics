import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Events } from './components/Events';
import { StatelessHeader } from './components/StatelessHeader';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			homeLink: "Stateless Header",
			homeComponentMounted: true
		};
		console.log("CONSTRUCTOR");
	}

	onChangeHomeMounted() {
		this.setState({
			homeComponentMounted: !this.state.homeComponentMounted
		});
	}

	componentWillMount() {
		console.log("COMPONENT WILL MOUNT");
	}

	componentDidMount() {
		console.log("COMPONENT DID MOUNT");
	}

	componentWillReceiveProps(nextProps) {
		console.log("COMPONENT WILL RECEIVE PROPS - ", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("SHOULD COMPONENT UPDATE - ", nextProps, " / ", nextState);
		/*
		if(nextState.status === 1){
			return false;
		}
		*/
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("COMPONENT WILL UPDATE - ", nextProps, " / ", nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("COMPONENT WILL MOUNT - ", prevProps, " / ", prevState);
	}

	componentWillUnmount() {
		console.log("COMPONENT WILL UNMOUNT");
	}

	onGreet() {
		alert("hello!");
	}

	onChangeLink(newName) {
		this.setState({
			homeLink: newName
		});
	}

	render() {
		const user = {
			name: "Anna",
			hobbies: ["sports", "reading"]
		};

		let homeComponent = "";
		if(this.state.homeComponentMounted) {
			homeComponent = (
				<Home name={"Max"}
					  age={23}
					  user={user}
					  greet={this.onGreet}
					  changeLink={this.onChangeLink.bind(this)}
					  initialName={this.state.homeLink}>
					<p>This is a child paragraph!</p>
				</Home>
			);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<StatelessHeader homeLink={this.state.homeLink}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						{homeComponent}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<button className="btn btn-primary"
								onClick={this.onChangeHomeMounted.bind(this)}>
							Toggle Mount Home Component
						</button>
					</div>
					<hr/>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Events name={"Anna"}
								initialAge={28}/>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));
