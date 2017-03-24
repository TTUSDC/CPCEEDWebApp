import React from 'react';

import Header from 'grommet/components/Header';
import Select from 'grommet/components/Select';
import Menu from 'grommet/components/Menu';
import View from 'grommet/components/icons/base/View';
import Label from 'grommet/components/Label';

class EventsViewBar extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<Header>
				<Menu icon={<View />} label='View Options'>
					
				</ Menu>
			</Header>
		)
	}
}

export default EventsViewBar;