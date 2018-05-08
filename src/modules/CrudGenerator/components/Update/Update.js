import React from 'react';
import Create from '../Create/Create';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Update extends React.PureComponent {

  componentDidMount() {
  	this.props.getSingle({
      id: this.props.params.id,
    });
  }
  render() {
    return (
      <Create
        {...this.props}
        initialValues={this.props.initialValues}
      />
    )
  }
}

export default Update;
