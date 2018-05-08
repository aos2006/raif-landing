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
        label="Наименование параметра KPI"
      >
        <Input
          name="kpi"
          value={values.kpi}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Наименование заголовка"
      >
        <Input
          name="title"
          value={values.title}
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
