
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Title.css';

const Title = props => (
  <h2 className={cx([
    s.root,
    {
      [s.white]: props.white,
      [s.medium]: props.medium,
      [s.small]: props.small,
      [s.italic]: props.italic,
      [s.center]: props.center,
    },
    props.classes.root,
  ])}>
    {props.children}
  </h2>
);

Title.defaultProps = {
  classes: { root: '' }
}
export default Title
