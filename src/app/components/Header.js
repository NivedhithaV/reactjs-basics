import React from 'react';

export class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><a href="#">Header</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}