const homeRoute = {
    path: 'home/',

    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/Home').default)
        })
    }
}

export default homeRoute