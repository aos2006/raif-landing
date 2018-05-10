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
        name='lines'
        render={(props) => {
          return (
            <div>
              {values.lines.map((item, index) => (
                <div>
                  <FormItem
                    {...formItemLayout}
                    label='Выберите линию'
                    className={s.wrapper}
                  >
                    <Select
                      defaultValue={values.lines[index].line}
                      onChange={val => setFieldValue(`lines.${index}.line`, val)}>
                      {[
                          { id: 1, title: 'Линия1' },
                          { id: 2, title: 'Линия2' },
                          { id: 3, title: 'Линия3' },
                      ].map(item => (
                        <Option value={item.id}>{item.title}</Option>
                      ))}
                    </Select>
                    {values.lines.length > 1 ? (
                      <Icon
                        className={cx([
                          'dynamic-delete-button',
                          s.remove,
                        ])}
                        onClick={() => props.remove(index)}
                        type='minus-circle-o'
                        size='2x'
                        disabled={values.lines.length === 1}
                      />
                    ) : null}
                  </FormItem>
                </div>
              ))}
              <FormItem
                label='Добавить линию'
                {...formItemLayout}
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
