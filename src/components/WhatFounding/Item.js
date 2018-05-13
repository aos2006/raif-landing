import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './WhatFounding.css';
import Title from 'components/Title';

const Item = props => (
  <li className={s.item}>
    <div className={s.header}>
      <span className={s.icon}>
        {props.icon}
      </span>
      <ul className={s.drop}>
        {props.list.map(item => (
          <li className={s.dropItem}>
            {item.txt}
          </li>
        ))}
      </ul>
    </div>
    <Title medium italic classes={{ root: s.sectionTitle }}>
      {props.title}
    </Title>
  </li>
);

export default Item;
