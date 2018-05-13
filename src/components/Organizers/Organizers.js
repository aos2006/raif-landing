
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Organizers.css';
import Title from 'components/Title';
import Section from 'components/Section';
import Container from 'components/Container';
import Dwy from './dwy.svg';
import Raif from './raif.svg';
import Carousel from 'nuka-carousel';
import DwyGray from './dwyGray.svg';
import Left from './left.svg';
import Right from './right.svg';

class Organizers extends React.PureComponent {
  state = {
    slideIndex: 0,
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
                <a href="" className={s.logo}>
                  <Raif/>
                </a>
                <a href="" className={s.logo}>
                  <Dwy/>
                </a>
              </header>
              <section className={s.slider}>
                <h4 className={s.label}>
                  Партнеры
                </h4>
                <div className={s.carousel}>
                  <Carousel slidesToShow={5}
                            slideIndex={this.state.slideIndex}
                            slidesToScroll={1}
                            renderTopCenterControls={({ currentSlide }) => null}
                            renderCenterLeftControls={({ previousSlide }) => null}
                            renderCenterRightControls={({ nextSlide }) => null}
                            renderBottomCenterControls={() => null}
                  >
                    <div>
                      <DwyGray/>
                    </div>
                    <div>
                      <DwyGray/>
                    </div>
                    <div>
                      <DwyGray/>
                    </div>
                    <div>
                      <DwyGray/>
                    </div>
                    <div>
                      <DwyGray/>
                    </div>
                  </Carousel>
                </div>
              </section>
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
                  <Carousel slidesToShow={5}
                            slideIndex={this.state.slideIndex}
                            slidesToScroll={1}
                            renderTopCenterControls={({ currentSlide }) => null}
                            renderCenterLeftControls={({ previousSlide }) => null}
                            renderCenterRightControls={({ nextSlide }) => null}
                            renderBottomCenterControls={() => null}
                  >
                    <div>
                      <DwyGray/>
                    </div>
                    <div>
                      <DwyGray/>
                    </div>
                    <div>
                      <DwyGray/>
                    </div>
                    <div>
                      <DwyGray/>
                    </div>
                    <div>
                      <DwyGray/>
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
