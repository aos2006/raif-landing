
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Organizers.css';
import Title from 'components/Title';
import Section from 'components/Section';
import Container from 'components/Container';
import Dwy from 'components/Logo/dwy.svg';
import Raif from './raif.svg';
import Carousel from 'nuka-carousel';
import Left from './left.svg';
import Right from './right.svg';
import Ufa from './logo_ufa.svg';
import svfu from './logo_СВФУ.jpg';
import gotech from './logo_gotech_innovation.png';
import ai from './ai_logo.png';

class Organizers extends React.PureComponent {
  state = {
    slideIndex: 0,
    slidesToShow: 5
  }

  componentDidMount() {
    if($('body, html').width() <= 650) {
      this.setState({
        slidesToShow: 4,
      })
    }
  }

  render() {
    return (
      <div className={s.root} id="organizers">
        <Section type="whiteGray" classes={{ root: s.section }}>
          <Container>
            <section>
              <header className={s.header}>
                <Title classes={{ root: s.title }}>
                  Организаторы
                </Title>
                <a href="https://www.raiffeisen.ru/" target="_blank" className={s.logo}>
                  <Raif/>
                </a>
                <a href="https://www.deworkacy.ru/corporateinnovations" target="_blank" className={s.logo}>
                  <Dwy className={s.dwy} />
                </a>
              </header>
              {/*<section className={s.slider}>*/}
                {/*<h4 className={s.label}>*/}
                  {/*Партнеры*/}
                {/*</h4>*/}
                {/*<div className={s.carousel}>*/}
                  {/*<Carousel slidesToShow={this.state.slidesToShow}*/}
                            {/*slideIndex={this.state.slideIndex}*/}
                            {/*slidesToScroll={1}*/}
                            {/*renderTopCenterControls={({ currentSlide }) => null}*/}
                            {/*renderCenterLeftControls={({ previousSlide }) => null}*/}
                            {/*renderCenterRightControls={({ nextSlide }) => null}*/}
                            {/*renderBottomCenterControls={() => null}*/}
                  {/*>*/}

                   {/**/}
                  {/*</Carousel>*/}
                {/*</div>*/}
              {/*</section>*/}
              <div className={s.controls}>
            <span className={s.arrow} onClick={() => this.setState({
              slideIndex: this.state.slideIndex === 0 ? 0 : this.state.slideIndex - 1,
            })}>
              <Left/>
            </span>
                <span className={s.arrow} onClick={() => this.setState({
                  slideIndex: this.state.slideIndex + 1
                })}>
              <Right/>
            </span>
              </div>
              <section className={s.slider}>
                <h4 className={s.label}>
                  Информационные<br/>
                  партнеры
                </h4>
                <div className={s.carousel}>
                  <Carousel slidesToShow={this.state.slidesToShow}
                            slideIndex={this.state.slideIndex}
                            slidesToScroll={1}
                            renderTopCenterControls={({ currentSlide }) => null}
                            renderCenterLeftControls={({ previousSlide }) => null}
                            renderCenterRightControls={({ nextSlide }) => null}
                            renderBottomCenterControls={() => null}
                  >

                    <div className={s.slideItem}>
                      <a href=" https://www.sfedu.ru/" target="_blank">
                        <Ufa width={111}/>
                      </a>
                    </div>
                    <div className={s.slideItem}>
                      <a href="https://www.s-vfu.ru/" target="_blank">
                        <img src={svfu} alt="" width={90}/>
                      </a>
                    </div>
                    <div className={s.slideItem}>
                      <a href=" http://www.gotech.vc/" target="_blank">
                        <img src={gotech} alt=""/>
                      </a>
                    </div>
                    <div className={s.slideItem}>
                      <a href="http://www.ai-community.com/" target="_blank">
                        <img src={ai} alt="" />
                      </a>
                    </div>
                  </Carousel>
                </div>
              </section>
            </section>
          </Container>
        </Section>
      </div>
    )
  }
}

export default Organizers
