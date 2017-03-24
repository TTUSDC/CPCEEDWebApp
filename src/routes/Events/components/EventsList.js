import React from 'react';

import EventCard from './EventCard';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

import filterMethods from '../filter-methods';
import sortMethods from '../sort-methods';

class EventsList extends React.Component {
	constructor(props) {
		super(props);
		this.renderEvents = this.renderEvents.bind(this);
	}

	renderEvents(events) {
		let list = events ? Object.keys(events) : [];
		this.props.filters.forEach( filter => {
			list = list.filter( item => {
				filterMethods[filter.type](events[item], ...filter.options);
			} )
		});
		list = list.sort( (a, b) => {
			sortMethods[this.props.sortBy](events[a], events[b])
		});
		if (this.props.sortAscending) list = list.reverse();
		return list.map((event) => {
			return (
				<Tile key={event}>
					<EventCard 
					 title={events[event].title}
					 location={events[event].location}
					 datetime={events[event].datetime}
					 description={events[event].description}
					 />
				</Tile>
			);
		});
	}

	render() {
		return (
			<Tiles>
				{this.renderEvents(this.props.events)}
			</Tiles>
		);
	}
}

export default EventsList;