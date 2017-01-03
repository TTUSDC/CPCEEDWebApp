import React from 'react'

const LoginRequiredRoutes = {
	getComponent(nextState, callback) {
		require.ensure([], (require) => {
            callback(null, require('./components/LoginRequiredWrapper').default)
        })
	},

	getChildRoutes(partialNextState, callback) {
        require.ensure([], (require) => {
            callback(null, [
                require('./routes/Home').default,
                require('./routes/Events').default
            ])
        })
    }
}

export default LoginRequiredRoutes