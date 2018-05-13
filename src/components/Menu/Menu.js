
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
        { txt: 'Зачем участвовать', onClick: scrollTo('#why') },
        { txt: 'Что мы ищем', onClick: scrollTo('#founding') },
        { txt: 'Для кого', onClick: scrollTo('#forWho') },
        { txt: 'Этапы', onClick: scrollTo('#steps') },
        { txt: 'Жюри', onClick: scrollTo('#organizers') },
      ].map(item => (
        <li className={s.item} onClick={item.onClick}>
          {item.txt}
        </li>
      ))}
      <li
        onClick={scrollTo('#order')}
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
