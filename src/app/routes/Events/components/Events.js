import React from 'react';
import { Link } from 'react-router';
import styles from './Events.scss';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

class Events extends React.Component {
	render () {
		return (<div>
				<h2>Events</h2>
				<Card>
					<CardTitle title="Some Event" subtitle="More info."/>
					<CardMedia/>
					<CardActions theme="card">
						<Button label="Details"/>
						<Button label="RSVP"/>
					</CardActions>
				</Card>
			</div>);
	}
}

module.exports = Events;