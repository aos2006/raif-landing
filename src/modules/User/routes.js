import React, {Component, PropTypes} from 'react';
import {Switch, Route} from 'react-router-dom';
import Roles from './components/Roles/Roles';

class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/roles" component={Roles} name="Roles" />
        </Switch>
      </div>
    )
  }
}

export default Routes;
