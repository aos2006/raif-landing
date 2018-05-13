
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Footer.css';
import Logo from 'components/Logo';
import Dwy from 'components/Logo/dwy.svg';
import Fb from './icons/fb.svg';
import Vk from './icons/vk.svg';
import Inst from './icons/inst.svg';
import Container from 'components/Container';

const Footer = props => (
  <div className={s.root}>
    <Container>
      <div className={s.row}>
        <section className={s.logo}>
          <h3 className={s.title}>
            Оператор скаутинга:
          </h3>
          <Logo href="https://deworkacy.ru">
            <Dwy />
          </Logo>
        </section>
        <section className={s.rules}>
          <a href="" className={s.rulesLink}>
            Правила участия в конкурсе
          </a>
        </section>
        <section className={s.socials}>
          <h3 className={s.title}>
            Следите за новостями
          </h3>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a href="">
                <Fb/>
              </a>
            </li>
            <li className={s.socialItem}>
              <a href="">
                <Vk/>
              </a>
            </li>
            <li className={s.socialItem}>
              <a href="">
                <Inst/>
              </a>
            </li>
          </ul>
        </section>
        <section className={s.info}>
          <h3 className={s.title}>
            По всем вопросам обращайтесь:
          </h3>
          <p className={s.infoTxt}>
            <span>Павел Тебеньков</span>
            <a href="mailto: ptebenkov@deworkacy.ru">Email: ptebenkov@deworkacy.ru</a>
          </p>
        </section>
      </div>
    </Container>
  </div>
);

export default Footer
