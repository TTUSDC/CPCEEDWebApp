import React from 'react';

import Layer from 'grommet/components/Layer';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import Login from './Login.js';
import Register from './Register.js';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(newIndex) {
    this.setState({
      index: newIndex
    });
  }

  render() {
    return (
      <Layer
        closer={true}
        flush={false}
        align='center'
        onClose={() => {
          this.props.authCancelled();
        }}>
        <Tabs
          activeIndex={this.state.index}
          justify='center'
          responsive={false}
          onActive={(event) => {
            this.handleTabChange(event);
          }}>
          <Tab title='Login'>
            <Login
              handleLogin={this.props.handleLogin} />
          </Tab>
          <Tab title='Register'>
            <Register
              handleRegister={this.props.handleRegister} />
          </Tab>
        </Tabs>
      </Layer>
    );
  }
}

export default Auth;
