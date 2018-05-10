import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Form, Input, Button, Radio, Icon, Select } from 'antd'
import { FieldArray, Field } from 'formik'
import { Projects } from 'modules/Projects'
import { Activity } from 'modules/Activity'
import s from './Project.css'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const TextArea = Input.TextArea
const Option = Select.Option

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
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <FormItem
        label="Наименование виджета"
        {...formItemLayout}
      >
        <Input
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </FormItem>
      <Activity
        value={values.activity}
        onChange={val => setFieldValue('activity', val)}
      />
      <FormItem
        {...formItemLayout}
        label='Выберите показатель'
      >
        <Select
          defaultValue={values.param}
          onChange={val => setFieldValue('param', val)}>
          {[
            { id: 1, title: 'Параметр 1' },
            { id: 2, title: 'Параметр 2' },
            { id: 3, title: 'Параметр 3' },
            { id: 4, title: 'Параметр 4' },
          ].map(item => (
            <Option value={item.id}>{item.title}</Option>
          ))}
        </Select>
      </FormItem>

      <Button
        loading={isLoading}
        onClick={handleSubmit}
        type='submit'
      >
        {btnLabel}
      </Button>
    </form>
  )
}

export default Create
