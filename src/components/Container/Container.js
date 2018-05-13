
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Container.css';
const Container = props => (
  <div className={cx(s.root)}>
    {props.children}
  </div>
);

export default Container
