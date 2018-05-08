import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {IndexLink, Link} from 'react-router'
import {calculateOffset} from "modules/utils";
import {Table, Icon, Divider, Modal, Button} from 'antd';
import s from './DataList.css';

const actions = ({
  onDelete,
  updatePath,
  viewPath,
                 }) => ({
  title: 'Actions',
  key: 'actions',
  render: (col) => {
    return (
      <span>
      <span onClick={() => onDelete(col)} className={s.delete}>Delete</span>
      <Divider type="vertical"/>
      <Link to={`${updatePath}/${col.id}`}>Update</Link>
    </span>
    )
  },
})
class DataList extends React.PureComponent {
  state = {
    showModal: false,
    activeRecord: null,
  }

  visibleToggle = () => this.setState({ showModal: !this.state.showModal })

  render() {
    return (
      <div>
        <Modal
          onOk={() => {
            this.props.onDelete(this.state.activeRecord);
            this.visibleToggle();
          }}
          onCancel={this.visibleToggle}
          okText="Удалить"
          cancelText="Отменить"
          visible={this.state.showModal}
          title="Вы действительно хотите удалить запись?"
          closable={false}
        />
        <Button style={{
          marginBottom: '60px',
        }}>
          <Link to={this.props.createPath}>Создать</Link>
        </Button>
        <Table
          {...this.props}
          onRow={(rec) => {
            return {
              ...this.props,
            }
          }}
          columns={this.props.columns.concat(actions({
          onDelete: (col) => {
            this.setState({
              activeRecord: col,
            });
            this.visibleToggle();
          },
          viewPath: this.props.viewPath,
          updatePath: this.props.updatePath,
        }))}
          dataSource={this.props.data.map(item => ({ ...item, ...this.props }))}
        />
      </div>
    )
  }
}

export default DataList;
