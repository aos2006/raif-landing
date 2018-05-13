
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Steps.css';
import Container from 'components/Container';
import Title from 'components/Title';
import Section from 'components/Section';
import Button from 'components/Button';

const Steps = props => (
  <div id="steps" className={s.root}>
    <Section type="whiteGray" classes={{ root: s.section }}>
     <Container>
       <div className={s.row}>
         <div className={s.left}>
           <ul className={s.timeline}>
             {[
               { date: '23 апреля – 30 июня 2018 ', descr: 'Прием заявок' },
               { date: '1 июля – 20 июля 2018 ', descr: <span>Экспертиза заявок.<br/>Определение 5 финалистов<br/>локального этапа конкурса</span> },
               { date: '26 июля 2018 ', descr: <span>Локальный финал конкурса в<br/>Москве. Определение<br/>победителя</span>},
               { date: '27-28 августа 2018 ', descr: <span>Поездка в Вену и тренинг по<br/>презентации проекта для<br/>подготовки к заключительному<br/>туру отбора</span> },
               { date: 'Сентябрь 2018 ', descr: 'Финал конкурса и определение победителей' }
               ].map(item => (
               <li className={s.step}>
                 <article className={s.descr}>
                   <header>
                     {item.date}
                   </header>
                   <p>
                     {item.descr}
                   </p>
                 </article>
               </li>
             ))}
           </ul>
         </div>
         <div className={s.right}>
           <Title classes={{ root: s.title }}>
             Этапы Elevator<br />
             Lab Challenge
           </Title>
           <p>
             На первом этапе будет запущен локальный конкурс для определения наиболее перспективных стартапов для
             участия в международном Elevator Lab Challenge на уровне группы RBI. Таким образом, у финалистов локального
             конкурса будет возможность выступить перед топ-менеджментом Банка. На финальном этапе до 5 участников
             презентуют свои бизнес кейсы, и по результатам очных выступлений будет выбран локальный победитель и
             номинант на участие в финале международного конкурса.
           </p>
           <Button classes={{ root: s.button }} onClick={() => $('body, html').animate({
             scrollTop: $('#order').position().top,
           }, 1000)}>
             Хочу зарегистрировать команду
           </Button>
         </div>
       </div>
     </Container>
    </Section>
  </div>
);

export default Steps
