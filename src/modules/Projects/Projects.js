import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Radio, Form, Select } from 'antd';
import { connect } from 'react-redux';
import selectors from './selectors';
import * as types from './actionTypes';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const Projects = props => (
  <div>
    <FormItem
      {...formItemLayout}
      label="Выберите проект"
    >
      <Select defaultValue={props.defaultValue} onChange={(val) => props.onChange(val)}>
        {props.projects.map(item => (
          <Option value={item.id}>{item.title}</Option>
        ))}
      </Select>
    </FormItem>
  </div>
);

export default connect(state => ({
  projects: selectors.getList(state[types.NAME]),
}), null)(Projects);
