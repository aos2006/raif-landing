
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Button.css';
import Arrow from './arrow.svg';

const Button = props => (
  <button
    {...props}
    className={cx([
    s.root,
    props.classes.root,
  ])}>
    <span className={s.decor}>
      <Arrow />
    </span>
    <span className={s.inner}>
      {props.children}
    </span>
  </button>
);

Button.defaultProps = {
  classes: { root: '' },
}
export default Button
