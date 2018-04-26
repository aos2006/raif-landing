import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as actions from '../../actions';
import * as types from '../../actionTypes';
import Create from '../Create';
import Loader from 'components/Loader/Loader';

class Update extends React.PureComponent {

  componentDidMount() {
    this.props.getSingle(this.props.params.id);
  }

  render() {
    if (!this.props.isLoaded) return <Loader />;

    return (
      <Create
        btnLabel="Обновить"
        initialValues={this.props.initialValues}
      />
    )
  }
}

export default connect(
  state => ({
    isLoaded: state[types.NAME].getIn(['update', 'isLoaded']),
    initialValues: state[types.NAME].getIn(['update', 'initialValues']),
  }),
  { getSingle: actions.getSingle }
)(Update);
