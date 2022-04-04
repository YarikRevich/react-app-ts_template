
import React, { Dispatch } from 'react';
import { compose } from "redux"
import { connect } from "react-redux"
import { BrowserRouter, NavLink, Route } from "react-router-dom"

import Preloader from './components/Preloader/Preloader';

import classes from "./constants/App/App.module.css"

import { createInitialized } from './redux/app-reducer';

import { State, Components } from './types';

class App extends React.Component<Components.App.AppType> {
	componentDidMount() {
		this.props.initialize()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<BrowserRouter>
				<div>
					<nav className={classes["nav-bar"]}>
						<div className={classes["photos"]}>
							<NavLink to="/" className="nav-button">Home {/* Place your name of link */}</NavLink>
						</div>
					</nav>
					<Route exact path="/photos" render={() => null /* Place your component */} />
					<div className={classes["footer"]}>
						<div className="contact-info">
							<span>Created By <a href="https://github.com/YarikRevich/tmpm">TMPM</a></span>
							<span>All rights are reserved</span>
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	};
}


const mapStateToProps = (props: State) => {
	return {
		initialized: props.app.initialized
	}
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
	return {
		initialize: () => {
			dispatch(createInitialized())
		}
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);