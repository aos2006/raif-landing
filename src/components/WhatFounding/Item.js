import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './WhatFounding.css';
import Title from 'components/Title';

class Item extends React.PureComponent {
  state = {
   show: false,
  }

  render() {
    return (
      <li className={s.item} onClick={this.props.toggleActive}>
        <div className={s.header}>
        <span className={s.icon}>
          {this.props.icon}
        </span>
        </div>
        <Title medium italic classes={{ root: s.sectionTitle }}>
          {this.props.title}
        </Title>
        <ul className={s.drop} style={{
          visibility: this.props.isActive ? 'visible' : 'hidden',
          opacity: this.props.isActive ? 1 : 0,
        }}>
          {this.props.list.map(item => (
            <li className={s.dropItem}>
              {item.txt}
            </li>
          ))}
        </ul>
      </li>

    )
  }
}

export default Item;
