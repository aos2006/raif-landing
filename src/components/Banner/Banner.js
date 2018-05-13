
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Banner.css';
import Button from 'components/Button';
import Container from 'components/Container';

const Banner = props => (
  <div className={s.root}>
    <div className={s.container}>
      <Container>
        <h1 className={s.title}>
          Elevator Lab Challenge
        </h1>
        <h2 className={s.subtitle}>
          Прокачай свой стартап с Райффайзен банком
        </h2>
        <p className={s.descr}>
          До конца приема заявок осталось:
        </p>
        <Button onClick={() =>  $('body, html').animate({
          scrollTop: $('#order').position().top,
        }, 1000)}>
          Подать заявку
        </Button>
      </Container>
    </div>
  </div>
);

export default Banner
