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
        label='Выберите KPI'
        {...formItemLayout}
      >
        <Select
          defaultValue={values.kpi}
          onChange={val => setFieldValue('kpi', val)}
        >
          {[
            { id: 1, title: 'KPI 1' },
            { id: 2, title: 'KPI 2' },
            { id: 3, title: 'KPI 3' },
          ].map(item => (
            <Option value={item.id}>
              {item.title}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem
        label='Выберите Табло'
        {...formItemLayout}
      >
        <RadioGroup value={values.tablo} onChange={ev => setFieldValue('tablo', ev.target.value)}>
          <Radio value={1}>Табло 1</Radio>
          <Radio value={2}>Табло 2</Radio>
        </RadioGroup>
      </FormItem>
      <FieldArray
        name='params'
        render={(props) => {
          return (
            <div>
              {values.params.map((item, index) => (
                <div className={s.wrapper}>
                  <FormItem
                    {...formItemLayout}
                    label='Выберите параметр'
                    className={s.wrapper}
                  >
                    <Select
                      defaultValue={values.params[index]}
                      onChange={val => setFieldValue(`params.${index}`, val)}>
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
                </div>
              ))}
            </div>
          )
        }}
      />
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
