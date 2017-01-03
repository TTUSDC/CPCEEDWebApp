import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import auth from './auth'

const appRoute = {
    path: '/',

    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/App').default)
        })
    },

    // getIndexRoute(partialNextState, callback) {
    //     require.ensure([], (require) => {
    //         callback(null, require('./routes/Login'))
    //     })
    // },

    getChildRoutes(partialNextState, callback) {
        require.ensure([], (require) => {
            callback(null, [
                require('./routes/Register').default,
                require('./routes/Login').default,
                require('./routes/LoginRequired').default
            ])
        })
    }
}

render((
  <Router history={hashHistory} routes={appRoute}/>
), document.getElementById('app'))
