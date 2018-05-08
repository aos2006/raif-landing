import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Radio, Form } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const Activity = props => (
  <div>
    <FormItem {...formItemLayout} label="Выберите активность">
      <RadioGroup onChange={(ev) => props.onChange(ev.target.value)} value={props.value}>
        <Radio value={1}>Inbound</Radio>
        <Radio value={2}>Emails</Radio>
        <Radio value={3}>Chats</Radio>
        <Radio value={4}>Telesales</Radio>
        <Radio value={5}>Not Avialable</Radio>
      </RadioGroup>
    </FormItem>
  </div>
);

export default Activity;
