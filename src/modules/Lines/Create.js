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
        label="Наименование линии"
      >
        <Input
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </FormItem>

      <FieldArray
        name="rows"
        render={(props) => (
          <div>
            {values.rows.map((item, index) => (
              <div>
                <FormItem
                  {...formItemLayout}
                  label="ФИО"
                >
                  <Input
                    onChange={(ev) => {
                      setFieldValue(`rows.${index}.fio`, ev.target.value, false)
                    }}
                    value={values.rows[index].fio}
                  />
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Наименование должности"
                >
                  <Input
                    onChange={(ev) => setFieldValue(`rows.${index}.position`, ev.target.value, false)}
                    value={values.rows[index].position}
                  />
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Телефон"
                >
                  <Input
                    onChange={ev => setFieldValue(`rows.${index}.phone`, ev.target.value, false)}
                    value={values.rows[index].phone}
                  />
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Email"
                >
                  <Input
                    onChange={ev => setFieldValue(`rows.${index}.email`, ev.target.value, false)}
                    value={values.rows[index].email}
                  />
                </FormItem>
              </div>
            ))}
            <FormItem
              label="Добавить строку"
              {...formItemLayout}
            >
              <Button size='lg' onClick={() => props.push({
                fio: '',
                phone: '',
                email: '',
                position: ''
              })}>
                Добавить
              </Button>
            </FormItem>
          </div>
        )}
      />
      <FormItem
        {...formItemLayout}
        label="Уменьшенное изображение"
      >
        <Upload>
          <Button>
            <Icon type="upload"/> Загрузить изображение
          </Button>
        </Upload>
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Полное изображение"
      >
        <Upload>
          <Button>
            <Icon type="upload"/> Загрузить изображение
          </Button>
        </Upload>
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
