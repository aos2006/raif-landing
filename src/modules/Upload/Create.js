import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Form, Input, Button, Radio, Upload, Icon, notification } from 'antd';
import { FieldArray, Field } from 'formik';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;


const Create = ({
                  create,
                  isLoading,
                  handleSubmit,
                  handleChange,
                  setValues,
                  setFieldValue,
                  values,
                  errors,
                  btnLabel = 'Создать',
                }) => {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <FormItem
        {...formItemLayout}
        label="Параметр"
      >
        <Input
          name="parameter"
          value={values.parameter}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Параметр RU"
      >
        <Input
          name="title.ru"
          value={values.title.ru}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Параметр EN"
      >
        <Input
          name="title.en"
          value={values.title.en}
          onChange={handleChange}
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
  )
};

export default Create;
