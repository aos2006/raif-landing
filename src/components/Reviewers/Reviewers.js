
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Reviewers.css';
import Title from 'components/Title';
import Container from 'components/Container';
import Section from 'components/Section';
import popov from './images/4-100.jpg';
import tret from './images/9-100.jpg';
import shevk from './images/3-100.jpg';
import karandin from './images/8-100.jpg';
import damien from './images/2-100.jpg';
import voevod from './images/7-100.jpg';
import chizik from './images/10-100.jpg';

const generateFakeList = (tmpl, count) => {
  let box = [];
  for(let i = 0; i < count; i++) {
    box.push(tmpl);
  }
  return box;
}


const Reviewers = props => (
  <div className={s.root} id="zury">
    <Section type="white" classes={{ root: s.section }}>
      <Container>
        <Title center classes={{ root: s.title }}>
          Жюри Elevator Lab
        </Title>
        <ul className={s.list}>
          {[
            {
              name: 'Андрей Попов',
              descr: 'Руководитель дирекции информационных технологий, член Правления',
              src: popov,
            },
            {
              name: 'Олег Третьяк',
              descr: 'Исполнительный директор, отдел IT архитектуры',
              src: tret,
            },
            {
              name: 'Александр Шевкунов',
              descr: 'Исполнительный директор, финансовая дирекция',
              src: shevk,
            },
            {
              name: 'Роман Карандин',
              descr: 'Исполнительный директор, управление по вопросам страхового бизнеса',
              src: karandin,
            },
            {
              name: 'Дамьен Леклер',
              descr: 'Управляющий директор, дирекция обслуживания физических лиц и малого бизнеса',
              src: damien
            },
            {
              name: 'Наталья Воеводина',
              descr: 'Управляющий директор, операционное управление',
              src: voevod
            },
            {
              name: 'Ханнес Чижек',
              descr: 'Руководитель группы цифрового бизнеса RBI',
              src: chizik
            }
          ].map(item => (
            <li className={s.item}>
              <div className={s.img}>
                <img src={item.src} alt="" width={169} height={169} />
              </div>
              <span className={s.name}>{item.name}</span>
              <p className={s.descr}>
                {item.descr}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  </div>
);

export default Reviewers
