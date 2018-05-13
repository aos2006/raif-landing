
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Reviewers.css';
import Title from 'components/Title';
import Container from 'components/Container';
import Section from 'components/Section';

const generateFakeList = (tmpl, count) => {
  let box = [];
  for(let i = 0; i < count; i++) {
    box.push(tmpl);
  }
  return box;
}


const Reviewers = props => (
  <div className={s.root}>
    <Section type="white">
      <Container>
        <Title center classes={{ root: s.title }}>
          Жюри Elevator Lab
        </Title>
        <ul className={s.list}>
          {generateFakeList({
              name: 'Андрей Попов',
              descr: 'Руководитель дирекции информационных технологий, член Правления',
              src: 'https://loremflickr.com/169/169'
            }, 16).map(item => (
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
