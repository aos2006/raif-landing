
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Founding.css';
import Section from 'components/Section';
import Title from 'components/Title';
import Container from 'components/Container';
import Man from './icons/man.svg';
import Stat from './icons/stat.svg';
import Glass from './icons/glass.svg';
import Euro from './icons/euro.svg';
import Rubl from './icons/rubl.svg';
import Card from './icons/card.svg';
import Airplane from './icons/airplane.svg';

const Founding = props => (
  <div className={s.root} id="why">
    <Section classes={{ root: s.section }}>
      <Container>
        <Title classes={{ root: s.title }} center>
          Зачем участвовать?
        </Title>
        <div className={s.row}>
          <div className={s.column}>
            <Title medium italic classes={{ root: s.columnTitle }}>
              Для участников
            </Title>
            {props.list1.map(item => (
              <div className={s.item}>
                <span className={s.icon}>
                  {item.icon}
                </span>
                <p className={s.descr}>
                  {item.txt}
                </p>
              </div>
            ))}
          </div>
          <div className={s.column}>
            <Title medium italic classes={{ root: s.columnTitle }}>
              Для победителей<br />
              Elevator Lab Challenge
            </Title>
            {props.list2.map(item => (
              <div className={s.item}>
                <span className={s.icon}>
                  {item.icon}
                </span>
                <p className={s.descr}>
                  {item.txt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  </div>
);

Founding.defaultProps = {
  list1: [
    {
      icon: <Man />,
      txt: <span>Возможность презентовать проект топ-менеджерам Банка</span>
    },
    {
      icon: <Stat/>,
      txt: <span>Индивидуальный практический коучинг со стороны бизнес-заказчиков</span>
    },
    {
      icon: <Glass/>,
      txt: <span>PR поддержка со стороны Райффайзенбанк Россия</span>
    }
  ],
  list2: [
    {
      icon: <Euro />,
      txt: <span>До 200 000 евро для запуска пилотного проекта в Европе</span>
    },
    {
      icon: <Rubl/>,
      txt: <span>1 000 000 рублей на пилотный проект для локального чемпиона в России</span>
    },
    {
      icon: <Card />,
      txt: <span>Приглашение (Wild card) в Вену на заключительный этап отбора в европейский акселератор <a href="https://www.rbinternational.com/" target="_blank">RBI Group</a> в сентябре 2018</span>
    },
    {
      icon: <Airplane/>,
      txt: <span>Поездка в Вену 27-28 августа, тренинг в головном офисе RBI и подготовка к презентации на финал</span>
    }
  ]
}
export default Founding
