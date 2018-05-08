import React from 'react';
import { Form, Input, Button, Radio, Upload, Icon, Select } from 'antd';
import { Projects } from 'modules/Projects';

const FormItem = Form.Item;
const Option = Select.Option;

const Create = ({
                  create,
                  isLoading,
                  handleSubmit,
                  handleChange,
                  setValues,
                  projects,
                  values,
                  errors,
                  btnLabel = 'Создать',
                  initialValues = {
                    project: '',
                    year: '',
                  }
                }) => {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  console.log(initialValues);

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Projects
        defaultValue={initialValues.project}
        onChange={val => setValues({ ...values, project: val })}
      />
      <FormItem
        {...formItemLayout}
        label="Введите год"
      >
        <Input
          name="year"
          value={values.year}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Загрузиет файл"
      >
        <Upload>
          <Button>
            <Icon type="upload"/> Загрузить файл
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
