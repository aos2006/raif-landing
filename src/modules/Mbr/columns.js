import React from 'react';

export default [{
  title: '#',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Проект',
  dataIndex: 'project',
  key: 'project',
},
  {
    title: 'Год',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Файлы',
    key: 'files',
    render: (obj) => obj.files.map(item => (<a href={item.fileUrl} target="_blank">{item.fileUrl}</a>))
  }
];
