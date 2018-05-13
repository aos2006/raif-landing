
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Header.css';
import Logo from 'components/Logo';
import Container from 'components/Container';
import Menu from 'components/Menu';

const Header = props => (
  <div className={s.root}>
    <Container>
      <div className={s.row}>
        <div className={s.logo}>
          <Logo href="https://www.raiffeisen.ru/" />
        </div>
        <div className={s.menu}>
          <Menu/>
        </div>
      </div>
    </Container>
  </div>
);

export default Header
