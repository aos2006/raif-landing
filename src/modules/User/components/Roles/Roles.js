
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Roles.css';
import List from 'src/components/List';
import {
    FormGroup,
  Input,
  Label
} from 'reactstrap';
const Roles = props => (
  <div>
    <List
      withoutEdit
      tableTitle="Настройка прав доступа"
      createPath="/roles/create"
      editPath="/roles/edit"
      pageCount={10}
      activePage={1}
      render={(id, column) => (
        <div className="roles-column">
          {column.role ? (
            column.role
          ) : (
            <Label className="switch switch-3d switch-primary">
              <Input type="checkbox" className="switch-input" defaultChecked/>
              <span className="switch-label"></span>
              <span className="switch-handle"></span>
            </Label>
          )}
        </div>
      )}
      header={[
        { value: '#' },
        { value: 'Наименование роли' },
        { value: 'Dashboard' },
        { value: 'MBR/QBR' },
        { value: 'Отчеты' },
        { value: 'Счета' },
        { value: 'Новости' },
        { value: 'Отчеты по качеству' },
        { value: 'Контакты' },
      ]}
      list={[
        {
            id: 1,
            list: [
              {
                  id: 1,
              },
              {
                id: 1,
                role: 'Admin',
              },
              {
                id: 1,
                active: true,
              },
              {
                id: 1,
                active: true,
              },
              {
                id: 1,
                active: true,
              },
              {
                id: 1,
                active: true,
              },
              {
                id: 1,
                active: true,
              },
              {
                id: 1,
                active: true,
              },
              {
                id: 1,
                active: true,
              }
            ]
        }
      ]}
    />
  </div>
);

export default Roles;
