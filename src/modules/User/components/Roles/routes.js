import React, {Component, PropTypes} from 'react';
import {Switch, Route} from 'react-router-dom';
import Roles from './Roles';
import Create from './Create/Create';

class Routes extends Component {

  render() {
    return (
        <Switch>
          <Route path="/roles/create" component={Create} />
          <Route path="/roles" component={Roles} />
        </Switch>
    )
  }
}

export default Routes;
