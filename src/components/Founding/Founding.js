
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
      txt: <span>Возможность презентовать проект топ-<br/>менеджерам Банка</span>
    },
    {
      icon: <Stat/>,
      txt: <span>Индивидуальный практический коучинг <br/>со стороны бизнес-заказчиков*</span>
    },
    {
      icon: <Glass/>,
      txt: <span>PR поддержка со стороны<br/>Райффайзенбанк Россия</span>
    }
  ],
  list2: [
    {
      icon: <Euro />,
      txt: <span>Бюджет акселератора до 200 000 евро для<br/>запуска пилотного проекта в Европе</span>
    },
    {
      icon: <Rubl/>,
      txt: <span>1 000 000 рублей на пилотный проект для<br/>локального чемпиона в России</span>
    },
    {
      icon: <Card />,
      txt: <span>Специальное приглашение (Wild card) на <br/>заключительный отборочный тур программы RBI<br/>Group в сентябре 2018</span>
    },
    {
      icon: <Airplane/>,
      txt: <span>Поездка в Вену 27-28 августа и тренинг<br />по презентации проекта для подготовки к заключительному туру отбора</span>
    }
  ]
}
export default Founding
