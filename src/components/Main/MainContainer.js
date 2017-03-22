import React from 'react';
import * as firebase from "firebase";
import {connect} from 'react-redux';

import {updateUser} from 'redux/actions.js';
import logger from 'logger/logger.js';
import Main from './Main.js';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    // Check for already authenticated users
    var user = firebase.auth().currentUser;

    if(user) {
      // Look for the type of the user (coordinator or student)
      logger.info('A user was already signed in');

      const rootRef = firebase.database().ref();
      const userRef = rootRef.child('users/' + user.uid);
      userRef.once('value').then((snapshot) => {
        this.props.dispatch(updateUser(snapshot.val()));
      });
    }
  }

  render() {
    return (
      /*
        The container-presenter model dicates that the presenter
        (Main.js) must be composed by the container
        (MainContainer.js). However, this means that the children
        must be passed as props to Main.js, as it is not connected to
        the router directly.
      */
      <Main children={this.props.children}/>
    );
  }
}

export default connect()(MainContainer);
