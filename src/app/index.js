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
			homeLink: "Stateless Header"
		}
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
						<Home name={"Max"}
							  age={23}
							  user={user}
							  greet={this.onGreet}
							  changeLink={this.onChangeLink.bind(this)}
							  initialName={this.state.homeLink}>
							<p>This is a child paragraph!</p>
						</Home>
					</div>
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
