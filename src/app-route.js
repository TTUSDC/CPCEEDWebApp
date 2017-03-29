import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import MainContainer from './components/Main/MainContainer';
import eventsRoute from './routes/Events';
import activityRoute from './routes/Activity';
import settingsRoute from './routes/Settings';

const appRoute = (
  // Sets the path and primary component for this route
  <Route path='/' component={MainContainer}>
    {/* Load the events page by default */}
    <IndexRedirect to='events' />

    {/* Set the children of the primary component */}
    {eventsRoute}
    {activityRoute}
    {settingsRoute}
  </Route>
);

export default appRoute;
