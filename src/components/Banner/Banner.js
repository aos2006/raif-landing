
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Banner.css';
import Button from 'components/Button';
import Container from 'components/Container';
import 'jquery-countdown';

class Banner extends React.PureComponent {
  componentDidMount() {
    $('#timer').countdown('2018/06/30', ev => {
      $('#weeks').html(ev.offset.weeks);
      $('#days').html(ev.offset.days);
      $('#hours').html(ev.offset.hours);
      $('#minutes').html(ev.offset.minutes);
      $('#seconds').html(ev.offset.seconds);
    })
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Container>
            <h1 className={s.title}>
              Elevator Lab Challenge
            </h1>
            <h2 className={s.subtitle}>
              Прокачай свой стартап с Райффайзенбанком
            </h2>
            <p className={s.descr}>
              До конца приема заявок осталось:
              <div className={s.timer} id="timer">
                <span className={s.time}>
                  <p id="weeks">
                    10
                  </p>
                  <span>
                    Недель
                  </span>
                </span>
                <span className={s.time}>
                  <p id="days">
                    10
                  </p>
                  <span>
                    Дней
                  </span>
                </span>
                <span className={s.time}>
                  <p id="hours">
                    10
                  </p>
                  <span>
                    Часов
                  </span>
                </span>
                <span className={s.time}>
                  <p id="minutes">
                    10
                  </p>
                  <span>
                    Минут
                  </span>
                </span>
                <span className={s.time}>
                  <p id="seconds">10</p>
                  <span>
                    Секунд
                  </span>
                </span>
              </div>
            </p>
            <Button onClick={() => {
              $('body, html').animate({
                scrollTop: $('#order').position().top,
              }, 1000);
              yaCounter49129816.reachGoal('banner_button_click');
            }}>
              Подать заявку
            </Button>
          </Container>
        </div>
      </div>

    )
  }
}

export default Banner
