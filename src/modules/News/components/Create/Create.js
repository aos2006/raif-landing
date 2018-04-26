import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as actions from '../../actions';
import * as types from '../../actionTypes';
import { Form, Input, Button, Radio, Upload, Icon, notification } from 'antd';
import { Formik } from 'formik';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;


const Create = ({
  create,
  isLoading,
  btnLabel = 'Создать',
  initialValues = {
    language: 1,
    title: '',
    category: 1,
    shortContent: '',
    fullContent: '',
    externalLink: '',
  }
                }) => {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };


  return (
    <div>
      <Formik
        onSubmit={(values, action) => {
          create({
            data: { ...values }
          })
        }}
        initialValues={initialValues}
        render={({
                   values,
                   errors,
                   touched,
                   handleChange,
                   setValues,
                   handleBlur,
                   handleSubmit,
                   isSubmitting,
                 }) => (
          <form
            onSubmit={handleSubmit}
          >
            <FormItem
              {...formItemLayout}
              label="Выберите язык"
            >
              <RadioGroup
                name="language"
                value={values.language}
                onChange={(ev) => setValues({ ...values, language: ev.target.value })}>
                <Radio value={1}>Английский</Radio>
                <Radio value={2}>Русский</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Введите заголовок статьи"
            >
              <Input
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Категория новости"
            >
              <RadioGroup
                name="category"
                value={values.category}
                onChange={(ev) => setValues({ ...values, category: ev.target.value })}
              >
                <Radio value={1}>Компания</Radio>
                <Radio value={2}>Проекта</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Краткий текст новости"
            >
              <TextArea
                name="shortContent"
                onChange={handleChange}
                value={values.shortContent}
              />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Полный текст новости"
            >
              <TextArea
                name="fullContent"
                onChange={handleChange}
                value={values.fullContent}
              />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Изображение"
            >
              <Upload>
                <Button>
                  <Icon type="upload"/> Загрузить изображение
                </Button>
              </Upload>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Ссылка на сторонний ресурс"
            >
              <Input
                name="externalLink"
                addonBefore="https"
                onChange={handleChange}
                value={values.externalLink}
              />
            </FormItem>
            <Button
              loading={isLoading}
              onClick={handleSubmit}
              type="submit"
            >
              {btnLabel}
            </Button>
          </form>
        )}
        enableReinitialize
      />
    </div>
  )
};

export default connect(
  state => ({
    isLoading: state[types.NAME].getIn(['create', 'isLoading']),
  }),
  { create:  actions.create}
)(Create);
