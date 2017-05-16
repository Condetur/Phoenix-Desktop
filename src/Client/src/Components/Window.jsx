import React from 'react';
import {isUserAuthenticated} from '../Workers/Authentication';

class Window extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			authenticated: false
		};


	}

	render() {
		return <div>
			<div className={this.state.authenticated, 'nav'} />
		</div>
	}

}

module.exports = Window;