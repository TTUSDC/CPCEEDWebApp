import React from 'react'
import { withRouter } from 'react-router'

class LoginRequiredWrapper extends React.Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !(this.props.location.pathname == nextProps.location.pathname)
	}

	componentWillUpdate(nextProps, nextState) {
		if (!nextProps.user) {
			this.props.setRedirectUrl(this.props.location.pathname)
			this.props.router.push('login/')
		}
	}

	componentWillMount() {
		if (!this.props.user) {
			this.props.setRedirectUrl(this.props.location.pathname)
			this.props.router.push('login/')
		}
	}

	render() {
		return <div>{this.props.children}</div>
	}
}

export default withRouter(LoginRequiredWrapper)