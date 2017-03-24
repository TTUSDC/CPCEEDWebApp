import React from 'react';
import server from '../../../server/server';

import EventsList from './EventsList';
import EventsViewBar from './EventsViewBar';

import Header from 'grommet/components/Header';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      sort: 'date',
      sortAscending: true
    };
  }

  componentDidMount() {
    server.getAllEvents().then((data) => {
      this.setState({events: data});
    });
  }

  render() {
    return (
      <div>
        <EventsViewBar />

        <EventsList 
        events={this.state.events} 
        sortBy={this.state.sort} 
        sortAscending={this.state.sortAscending} 
        filters={[]} />

      </div>
    );
  }
}

export default Events;
