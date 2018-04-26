
import React, { Component } from 'react';
import LaddaButton, {SLIDE_RIGHT} from "react-ladda";
import {
  Row, Card, CardHeader, Form, Input, Col, CardBody, CardFooter, FormGroup, Label
} from 'reactstrap';

class Create extends Component {

  render() {
    return (
      <div>
        <div className="animated fadeIn">
          <Row center>
            <Col xs="12" md="12">
              <Card>
                <CardHeader>
                  <strong>Создание роли</strong>
                </CardHeader>
                <CardBody>
                  <Form className="form-horizontal">
                    <FormGroup>
                      <Input
                        type="text"
                        id="text-input"
                        placeholder="Наименование роли"
                        name="role"
                      />
                    </FormGroup>
                    <FormGroup row>
                      {[
                        {txt: 'Dashboard'},
                        {txt: 'Новости'},
                        {txt: 'Контакты'},
                        {txt: 'Диаграммы'},
                        {txt: 'Что-то еще'},
                      ].map(item => (
                        <Col xs={4}>
                          <Col xs={12}>
                            <Label className="mr-12">{item.txt}</Label>
                          </Col>
                          <Col xs={12}>
                            <Label className="switch switch-3d switch-primary">
                              <Input type="checkbox" className="switch-input" defaultChecked/>
                              <span className="switch-label"/>
                              <span className="switch-handle"/>
                            </Label>
                          </Col>
                        </Col>
                      ))}
                    </FormGroup>

                  </Form>
                </CardBody>
                <CardFooter>
                  <LaddaButton
                    type="submit"
                    className="btn btn-info btn-ladda"
                    loading={false}
                    data-color="blue"
                    data-style={SLIDE_RIGHT}
                  >
                    Создать
                  </LaddaButton>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Create;
