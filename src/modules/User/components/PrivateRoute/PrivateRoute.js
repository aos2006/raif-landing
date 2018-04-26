
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as types from '../Login/actionTypes';
import { Route, Redirect, Switch } from 'react-router-dom';
import * as actions from '../Login/actions';

class PrivateRoute extends React.PureComponent {

  componentDidMount() {
  	this.props.checkToken();
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          return (
            rest.token ? (
              <Component {...props} />
            ) : <Redirect from={props.location} to="/login" />
          )
        }}
      />
    )
  }
}

export default connect(
  state => {
    return {
      token: state[types.NAME].getIn(['user', 'token'])
    }
  },
  { checkToken: actions.checkToken },
)(PrivateRoute)
