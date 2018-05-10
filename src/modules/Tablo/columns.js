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
    title: 'Активность',
    render: () => (<span>показатель 1 <br/> показатель 2</span>)
  },
  {
    title: 'Показатель',
    render: () => (<span>Показатель</span>)
  }
]
