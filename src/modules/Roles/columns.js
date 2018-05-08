import React from 'react';
import { Switch, Input } from 'antd';
import * as actions from './actions'

const col = (obj, key) => {
  return (
    <Switch defaultChecked={obj[key].allow}
            onChange={() => obj.setPermissions({ roleId: obj.id, permissionKey: key, allow: !obj[key].allow })} />
  )
};

export default [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Наименование роли',
    key: 'title',
    dataIndex: 'title',
  },
  {
    title: 'Dashboard',
    key: 'dashboard',
    render: item => col(item, 'dashboard')
  },
  {
    title: 'MBR/QBR',
    key: 'mbr',
    render: item => col(item, 'mbr')
  },
  {
    title: 'Отчеты',
    key: 'report',
    render: item => col(item, 'report'),
  },
  {
    title: 'Счета',
    key: 'bill',
    render: item => col(item, 'bill')
  },
  {
    title: 'Новости',
    key: 'news',
    render: item => col(item, 'news')
  },
  {
    title: 'Отчеты по качеству',
    key: 'quality',
    render: item => col(item, 'qualityReports')
  },
  {
    title: 'Контакты',
    key: 'contacts',
    render: item => col(item, 'contacts')
  }
]



