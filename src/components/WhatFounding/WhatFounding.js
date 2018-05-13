
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './WhatFounding.css';
import Section from 'components/Section';
import Title from 'components/Title';
import Container from 'components/Container';
import Item from './Item';
import Bank from './icons/bank.svg';
import Trading from './icons/trading.svg';
import Anl from './icons/anl.svg';
import House from './icons/house.svg';
import Sol from './icons/solutions.svg';
import Raketa from './icons/raketa.svg';
import Bg from './bg.svg';

const WhatFounding = props => (
  <div
    id="founding"
    className={cx([
    s.root,
  ])}>
    <div className={s.bg}>
      <Bg />
    </div>
    <Section type="white" classes={{ root: s.section }}>
      <Container>
        <Title center classes={{ root: s.title }}>
          Что мы ищем?
        </Title>
        <ul className={s.list}>
          {props.list.map((item, index) => (
            <Item
              index={index + 1}
              {...item}
            />
          ))}
        </ul>
      </Container>
    </Section>
  </div>
);

WhatFounding.defaultProps = {
  list: [
    {
      icon: <Bank/>,
      title: 'RegTech',
      list: [
          { txt: 'Трансформация филиальной сети' },
          { txt: 'Трансформация филиальной сети' },
          { txt: 'Трансформация филиальной сети' },
          { txt: 'Трансформация филиальной сети' },
          { txt: 'Трансформация филиальной сети' },
        ],
    },
    {
      icon: <Trading />,
      title: 'Investment Trading',
      list: [
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
      ],
    },
    {
      icon: <Anl/>,
      title: 'Advanced Analytics',
      list: [
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
      ],
    },
    {
      icon: <House/>,
      title: 'Non-banking Services',
      list: [
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
      ],
    },
    {
      icon: <Sol/>,
      title: <span>Corporate Business<br/>Solutions</span>,
      list: [
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
      ],
    },
    {
      icon: <Raketa width={30} height={30}/>,
      title: <span>Customer Experience<br/>and Services
</span>,
      list: [
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Трансформация филиальной сети' },
      ],
    }
  ]
}
export default WhatFounding
