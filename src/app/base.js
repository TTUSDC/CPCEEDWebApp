import Rebase from 're-base'
import config from './firebase_credentials'

const base = Rebase.createClass({
	apiKey: config.apiKey,
	authDomain: config.authDomain,
	databaseURL: config.databaseURL,
	storageBucket: config.storageBucket,
	messagingSenderId: config.messagingSenderId
})

export default base