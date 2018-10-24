import React, { Component } from 'react';

import Menu from "./Menu";
import Post from "./Post";

import styles from '../styles/App.css';

class App extends Component {
	render() {		
		return (
			<div>
				<Menu />
				<Post />
			</div>
		)
	}
};

export default App;
