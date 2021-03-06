
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
import Phone from './icons/telephone-handle-silhouette.svg';
import Email from './icons/close-envelope.svg';


const Footer = props => (
  <div className={s.root} id="footer">
    <Container>
      <div className={s.row}>
        <section className={s.logo}>
          <h3 className={s.title}>
            Оператор скаутинга:
          </h3>
          <Logo href="https://www.deworkacy.ru/corporateinnovations" onClick={ev => yaCounter49129816.reachGoal('dwy_logo_click')}>
            <Dwy />
          </Logo>
        </section>
        <section className={s.rules}>
          <a href="/инормация для участия.pdf" className={s.rulesLink} target="_blank">
            Правила участия в конкурсе
          </a>
          <a href="/sogl_dlya_posetiteley_saita.pdf" className={s.rulesLink} target="_blank">
            Согласие на обработку персональных данных
          </a>
        </section>
        <section className={s.socials}>
          <h3 className={s.title}>
            Следите за новостями
          </h3>
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <a href="https://www.facebook.com/Deworkacy" target="_blank" onClick={ev => yaCounter49129816.reachGoal('fb_click')}>
                <Fb/>
              </a>
            </li>
            <li className={s.socialItem}>
              <a href="https://vk.com/deworkacy" target="_blank" onClick={ev => yaCounter49129816.reachGoal('vk_click')}>
                <Vk/>
              </a>
            </li>
            <li className={s.socialItem}>
              <a href="https://www.instagram.com/deworkacy/" target="_blank" onClick={ev => yaCounter49129816.reachGoal('inst_click')}>
                <Inst/>
              </a>
            </li>
          </ul>
        </section>
        <section className={s.info}>
          <h3 className={s.title}>
            Свяжитесь с нами
          </h3>
          <p className={s.infoTxt}>
            <div className={s.infoRow}>
              <a href="mailto: ptebenkov@deworkacy.ru" className={s.email} onClick={ev => yaCounter49129816.reachGoal('mail_click')}>
                <Email width={20} height={20}/>
              </a>
              <a href="tel:89998419419" className={s.phone} onClick={ev => yaCounter49129816.reachGoal('phone_click')}>
                <Phone width={20} height={20}/>
              </a>
            </div>
          </p>
        </section>
      </div>
    </Container>
  </div>
);

export default Footer
