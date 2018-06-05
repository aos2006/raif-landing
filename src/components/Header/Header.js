
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Header.css';
import Logo from 'components/Logo';
import Container from 'components/Container';
import Menu from 'components/Menu';
import Burger from './burger.svg';

class Header extends React.PureComponent {
  state = {
    showMenu: false,
  }
  render() {
    return (
      <div className={s.root}>
        <Container>
          <div className={s.row}>
            <div className={s.logo} onClick={ev => yaCounter49129816.reachGoal('raif_logo_click')}>
              <Logo href="https://www.raiffeisen.ru/" />
            </div>
            <div className={cx([
              s.menu,
              {
                [s.show]: this.state.showMenu,
              }
            ])}>
              <Menu
                handleClick={() => this.setState({
                  showMenu: !this.state.showMenu,
                })}
              />
            </div>
            <div className={s.burger} onClick={() => this.setState({
              showMenu: !this.state.showMenu,
            })}>
              <Burger width={15} height={10} />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Header
