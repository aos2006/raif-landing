import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as types from './actionTypes';
import { withRouter, Redirect } from 'react-router-dom';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, FormText} from 'reactstrap';
import {Formik} from 'formik';
import Validator from "modules/Validator"
import {SLIDE_RIGHT} from "react-ladda"

class Login extends Component {
  render() {
    if(this.props.token || window.localStorage.getItem('token')) {
      return <Redirect from="/login" to="/dashboard" />
    }
    return (
      <div className="app flex-row align-items-center">
        <Formik
          validationSchema={Validator.object().shape({
            name: Validator.string()
              .required('Имя пользователя обязательное поле'),
            password: Validator.string()
              .required('Пароль обязательное обязательное поле')
          })}
          initialValues={{
            name: '',
            password: '',
          }}
          onSubmit={(values, {props}) => {
            this.props.login({
              name: values.name,
              password: values.password,
            })
          }}
          render={({values, errors, handleSubmit, handleChange, setValues}) => {
            return (
              <Container>
                <form action="" onSubmit={handleSubmit}>
                  <Row className="justify-content-center">
                    <Col md="8">
                      <CardGroup className="mb-4">
                        <Card className="p-4">
                          <CardBody>
                            <h1>Login</h1>
                            <p className="text-muted">Sign In to your account</p>
                            <InputGroup className="mb-3">
                              <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                              </div>
                              <Input
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                              />
                              <Col xs="12">
                                <FormText color="muted">{errors.name}</FormText>
                              </Col>
                            </InputGroup>
                            <InputGroup className="mb-4">
                              <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                              </div>
                              <Input
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                              />
                              <Col xs="12">
                                <FormText color="muted">{errors.password}</FormText>
                              </Col>
                            </InputGroup>
                            <Row>
                              <Col xs="6">
                                <Button
                                  color="primary"
                                  onSubmit={handleSubmit}
                                  type="submit"
                                  className="px-4">
                                  Login
                                </Button>
                              </Col>
                              <Col xs="6" className="text-right">
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: 44 + '%'}}>
                          <CardBody className="text-center">

                          </CardBody>
                        </Card>
                      </CardGroup>
                    </Col>
                  </Row>
                </form>
              </Container>
            )
          }}
        />

      </div>
    );
  }
}

export default connect(
  (state) => ({
    token: state[types.NAME].getIn(['user', 'token'])
  }),
  {login: actions.login}
)(withRouter(Login));
