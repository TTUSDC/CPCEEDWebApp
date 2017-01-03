const loginRoute = {
    path: 'login/',

    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/Login'))
        })
    }
}

export default loginRoute
