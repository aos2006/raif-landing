import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Spin} from 'antd';
import s from './Loader.css';

const Loader = props => (
  <div className={s.root}>
    <Spin />
  </div>
);

export default Loader;
