const eventsRoute = {
	path: 'events/',

	getComponents(nextState, callback) {
		require.ensure([], (require) => {
			callback(null, require('./components/Events').default)
		})
	}
}

export default eventsRoute