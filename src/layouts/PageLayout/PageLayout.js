import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { connect } from 'react-redux';
import Projects from 'modules/Projects';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Founding from 'components/Founding';
import WhatFounding from 'components/WhatFounding';
import Reviewers from 'components/Reviewers';
import ForWho from 'components/ForWho';
import Steps from 'components/Steps';
import Footer from 'components/Footer';
import Organizers from 'components/Organizers';
import Order from 'components/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class PageLayout extends React.PureComponent {

  render() {
    const { children } = this.props;

    return (
      <div>
        <ToastContainer autoClose={5000}/>
        <Header />
        <Banner />
        <Founding />
        <WhatFounding />
        <ForWho />
        <Steps />
        <Reviewers />
        <Organizers />
        <Order />
        <Footer />
      </div>
    )
  }
}
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default connect(null, { getProjects: Projects.actions.fetchProjects })(PageLayout)
