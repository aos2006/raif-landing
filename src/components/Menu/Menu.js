
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Menu.css';
const scrollTo = id => () => $('body, html').animate({
  scrollTop: $(id).position().top,
}, 1000)

const Menu = props => (
  <div className={s.root}>
    <ul className={s.list}>
      {[
        { txt: 'Зачем участвовать', onClick: () => {
            props.handleClick();
            scrollTo('#why')();
          } },
        { txt: 'Что мы ищем', onClick: () => {
            props.handleClick();
            scrollTo('#founding')();
          } },
        { txt: 'Для кого', onClick: () => {
            props.handleClick();
            scrollTo('#forWho')();
          } },
        { txt: 'Этапы', onClick: () => {
            props.handleClick();
            scrollTo('#steps')()
          } },
        { txt: 'Жюри', onClick: () => {
            props.handleClick();
            scrollTo('#zury')();
          } },
      ].map(item => (
        <li className={s.item} onClick={item.onClick}>
          {item.txt}
        </li>
      ))}
      <li
        onClick={() => {
          props.handleClick();
          scrollTo('#footer')();
          yaCounter49129816.reachGoal('callback_menu_click');
        }}
        className={cx([
        s.item,
        s.button,
      ])}>
        Связаться с нами
      </li>
    </ul>
  </div>
);

export default Menu
