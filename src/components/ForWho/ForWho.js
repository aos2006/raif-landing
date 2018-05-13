
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './ForWho.css';
import Container from 'components/Container';
import Section from 'components/Section';
import Title from '../Title'

const ForWho = props => (
  <div id="forWho" className={s.root}>
    <Section type="gray" classes={{ root: s.section }}>
      <Container>
        <div className={s.row}>
          <div className={s.left}>
            <Title white classes={{ root: s.title }}>
              Для кого?
            </Title>
            <p className={s.descr}>
              Мы ищем стартапы с инновационными продуктами и сервисами в области Fintech. Локальный конкурс Elevator Lab
              Challenge является частью международного акселератора Elevator Lab банковской группы RBI, который
              позволяет
              вывести стартап на международный уровень
            </p>
          </div>
          <div className={s.right}>
            <div className={s.img}>
              <img src="https://loremflickr.com/805/430" alt="" width={805} height={430}/>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </div>
);

export default ForWho
