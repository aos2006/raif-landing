
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Section.css';

const Section = props => (
  <div className={cx([
    s.root,
    {
      [s[props.type]]: true,
    },
    props.classes.root,
  ])}>
    {props.children}
  </div>
);
Section.defaultProps = {
  classes: { root: '' },
  type: 'yellow',
}
export default Section
