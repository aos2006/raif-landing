
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Logo.css';
import Icon from './logo.svg';

const Logo = props => (
  <a href={props.href} target="_blank" {...props}>
    {props.children || <Icon />}
  </a>
);

export default Logo
