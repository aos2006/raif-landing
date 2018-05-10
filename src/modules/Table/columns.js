import React from 'react';

export default [
  {
    title: '#',
    dataIndex: 'id',
  },
  {
    title: 'Наименование виджета',
    dataIndex: 'title',
  },
  {
    title: 'Размер',
    render: () => (<span>test</span>)
  },
  {
    title: 'Показатели',
    render: () => (<span>показатель 1 <br /> показатель 2</span>)
  },
  {
    title: 'Целевые Показатели',
    render: () => (<span>параметр 1 <br/> параметр 2</span>)
  }
]
