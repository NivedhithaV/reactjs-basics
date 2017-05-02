import React from "react";
import { render } from "react-dom";
import  { Header } from "./components/Header";
import { Home } from './components/Home';

class App extends React.Component {
	render() {
		var user = {
			name: "Anna",
			hobbies: ["sports", "reading"]
		};
		return (
			<div className="container">
				<div className="row">
					<Header/>
				</div>
				<div className="row">
					<Home name={"Max"} age={23} user={user}>
						<p>This is a child paragraph!</p>
					</Home>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));
