import React from 'react'
import base from '../base'
import { withRouter } from 'react-router'
import styles from './App.scss'
import NavBar from './NavBar'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.setRedirectUrl = this.setRedirectUrl.bind(this)
		this.renderChild = this.renderChild.bind(this)
		this.simulateLogin = this.simulateLogin.bind(this)
		this.simulateLogout = this.simulateLogout.bind(this)
		this.state = {
			user: null,
			redirectURL: null,
			permissions: []
		}
	}

	componentDidMount() {
		base.onAuth((user) => {
			if (user) {
				this.setState({user: user})
			}
		})
	}

	componentWillMount() {
		if (!this.state.user && this.props.location.pathname == '/') {
			this.props.router.push('login/')
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if (!this.state.user && nextState.user) {
			if (nextState.redirectURL) this.props.router.push(nextState.redirectURL);
			else this.props.router.push('home/')
		} else if (this.state.user && !nextState.user && nextProps.location.pathname != '/login/') {
			this.props.router.push('login/')
		}
	}

	setRedirectUrl(redirectURL) {
		this.setState({redirectURL})
	}

	simulateLogin() {
		this.setState({user: 'someUser'})
	}

	simulateLogout() {
		this.setState({user: null})
	}

	renderChild() {
		if (this.props && this.props.children)
			return React.cloneElement(this.props.children, {setRedirectUrl: this.setRedirectUrl, user: this.state.user})
		return null
	}

	render() {
		return (
			<div>
				<NavBar/>
				<button onClick={this.simulateLogin}>Simulate Log In</button>
				<button onClick={this.simulateLogout}>Simulate Log Out</button>
				{this.renderChild()}
			</div>
		)
	}


}

export default withRouter(App)