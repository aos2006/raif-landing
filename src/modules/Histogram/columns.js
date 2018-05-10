import React from 'react';

export default [
  {
    title: '#',
    dataIndex: 'id',
  },
  {
    title: 'Наименование виджета',
    dataIndex: 'title',
  }, {
    title: 'Параметр',
    render: () => (<span>test</span>)
  },
  {
    title: 'Активность',
    render: () => (<span>test</span>)
  },
  {
    title: 'Ряд',
    render: () => (<span>Ряд</span>)
  }
]
