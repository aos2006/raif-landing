
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
import DwyGray from './dwyGray.svg';
import Left from './left.svg';
import Right from './right.svg';

class Organizers extends React.PureComponent {
  state = {
    slideIndex: 0,
    slidesToShow: 5
  }

  componentDidMount() {
    if($('body, html').width() <= 650) {
      this.setState({
        slidesToShow: 2,
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
              <section className={s.slider}>
                <h4 className={s.label}>
                  Партнеры
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

                    {[1,2,3,4,5].map(item => (
                      <div className={s.slideItem}>
                        <Dwy className={s.dwyGray}/>
                      </div>
                    ))}
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
                  <Carousel slidesToShow={this.state.slidesToShow}
                            slideIndex={this.state.slideIndex}
                            slidesToScroll={1}
                            renderTopCenterControls={({ currentSlide }) => null}
                            renderCenterLeftControls={({ previousSlide }) => null}
                            renderCenterRightControls={({ nextSlide }) => null}
                            renderBottomCenterControls={() => null}
                  >

                    {[1, 2, 3, 4, 5].map(item => (
                      <div className={s.slideItem}>
                        <Dwy className={s.dwyGray}/>
                      </div>
                    ))}
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
