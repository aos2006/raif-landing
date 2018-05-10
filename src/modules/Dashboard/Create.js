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
      <Projects
        defaultValue={values.project}
        onChange={val => setFieldValue('project', val)}
      />
      <Activity
        value={values.activity}
        onChange={val => setFieldValue('activity', val)}
      />

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
                      defaultValue={values.params[index].param}
                      onChange={val => setFieldValue(`params.${index}.param`, val)}>
                      {[
                          { id: 1, title: 'Параметр 1' },
                          { id: 2, title: 'Параметр 2' },
                          { id: 3, title: 'Параметр 3' },
                      ].map(item => (
                        <Option value={item.id}>{item.title}</Option>
                      ))}
                    </Select>
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label='Введите значение'>
                    <Input
                      value={values.params[index].value}
                      onChange={ev => setFieldValue(`params.${index}.value`, ev.target.value)}
                    />
                  </FormItem>
                  {values.params.length > 1 ? (
                    <Icon
                      className={cx([
                        'dynamic-delete-button',
                        s.remove,
                      ])}
                      onClick={() => props.remove(index)}
                      type='minus-circle-o'
                      size='2x'
                      disabled={values.params.length === 1}
                    />
                  ) : null}

                </div>
              ))}
              <FormItem
                label='Добавить строку'
                {...{
                  labelCol: { span: 6 },
                  wrapperCol: { span: 12 },
                }}
              >
                <Button size='lg' onClick={() => props.push({ line: '' })}>
                  Добавить
                </Button>
              </FormItem>
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
