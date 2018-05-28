
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

const toggle = Component => class ToggleActive extends React.PureComponent {
  constructor (props) {
    super();
    this.state = {
      activeItem: props.defaultActiveItem ? props.defaultActiveItem : null,
    };
  }

  render () {
    return (<Component
      {...this.props}
      {...this.state}
      toggleActive={this.toggleActive}
      getActive={this.getActive}
      setActive={this.setActive}
    />);
  }

  toggleActive = (id) => {
    this.setState({
      activeItem: id === this.state.activeItem ? null : id,
    });
  }

  getActive = id => this.state.activeItem === id

  setActive = (id) => {
    this.setState({
      activeItem: id,
    });
  }
};

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
      <Container noHidden>
        <Title center classes={{ root: s.title }}>
          Что мы ищем?
        </Title>
        <ul className={s.list}>
          {props.list.map((item, index) => (
            <Item
              toggleActive={() => props.toggleActive(index)}
              isActive={props.getActive(index)}
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
      title: <span>Регуляторные<br/>технологии</span>,
      list: [
          { txt: 'AML & KYC решения (вкл. блокчейн)' },
          { txt: 'Цифровая Идентификация (вкл. блокчейн)' },
          { txt: 'Управление данными и их защита' },
          { txt: 'Кибербезопасность' },
          { txt: 'Извлечение информации из текстов' },
        ],
    },
    {
      icon: <Trading />,
      title: <span>Инвестирование<br/>и трейдинг</span>,
      list: [
        { txt: 'Гибридные/цифровые помощники' },
        { txt: 'Умные Контракты (блокчейн)' },
        { txt: 'Обработка добровольных корпоративных действий' },
        { txt: 'Блокчейн для инвестиций на финансовых рынках' },
      ],
    },
    {
      icon: <Anl/>,
      title: 'Продвинутая аналитика',
      list: [
        { txt: 'Расширенный кредитный скоринг' },
        { txt: 'Предиктивная аналитика' },
        { txt: 'Кредитование МСБ' },
        { txt: 'Клиентская и торговая аналитика' },
        { txt: 'Искусственный интеллект (Включая обработку естественного языка)' },
        { txt: 'Аналитика клиентского опыта' },
      ],
    },
    {
      icon: <House/>,
      title: 'Небанковские сервисы',
      list: [
        { txt: 'Дополнительные сервисы для сегментов Ритейл & МСБ' },
        { txt: 'Новые цепочки создания стоимости на данных банка' },
        { txt: 'Новые сервисы, требующие банковских интерфейсов (Open API)' },
      ],
    },
    {
      icon: <Sol/>,
      title: <span>Корпоративный бизнес</span>,
      list: [
        { txt: 'Блокчейн для торгового финансирования' },
        { txt: 'Решения в области ценообразования' },
        { txt: 'Электронный документооборот/OCR' },
        { txt: 'Роботизированные технологии для FX торговли' },
      ],
    },
    {
      icon: <Raketa />,
      title: <span>Клиентский опыт<br/>и обслуживание</span>,
      list: [
        { txt: 'Трансформация филиальной сети' },
        { txt: 'Дополненная или виртуальная реальность' },
        { txt: 'Технологии удаленного обслуживания' },
        { txt: 'Голосовые интерфейсы' },
      ],
    }
  ]
}
export default toggle(WhatFounding);
