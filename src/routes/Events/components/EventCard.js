import React from 'react';

import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';

class EventCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(this.props.datetime)
		};
	}
	render() {
		return (
			<Card 
			 headingStrong 
			 label={this.state.date.toDateString()} 
			 heading={this.props.title} 
			 description={this.props.description}>
			 	<Anchor label='RSVP' />
			 	<Anchor label='Details' />
			 </Card>
		)
	}
}

export default EventCard;