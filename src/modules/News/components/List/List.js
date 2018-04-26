
  import React from 'react';
  import PropTypes from 'prop-types';
  import { connect } from 'react-redux';
  import * as types from '../../actionTypes';
  import cx from 'classnames';
  import { calculateOffset } from "modules/utils";
  import Data from 'modules/DataList';
  import Loader from 'components/Loader/Loader';
  import columns from './static';

  const { DataList, actions } = Data;

  class List extends React.PureComponent {
    state = {
      pagination: { total: 200 }
    }
    componentDidMount() {
      this.props.fetchNews(1, types.FETCH_NEWS_LIST, 'news/getList', types.NAME)
    }

    render() {
      if (!this.props.isLoaded) return <Loader />

      return (
        <div>
          <DataList
            columns={columns}
            data={this.props.list}
            createPath="/news/create"
            viewPath="/news"
            updatePath="/news/update"
            onDelete={col => this.props.deleteNews({
              type: types.DELETE_NEWS_REQ,
              name: types.DELETE_NEWS,
              url: 'news/getSingle',
              data: { newsId: col.id },
              meta: { showNotify: true, title: 'Новость успешно удалена' }
            })}
            pagination={this.state.pagination}
            loading={this.props.isLoading}
            onChange={({ current }) => this.props.fetchNews(current, types.FETCH_NEWS_LIST, 'news/getList', types.NAME)}
          />
        </div>
      )
    }
  }

export default connect(state => ({
  list: state[types.NAME].get('result').map(id => state[types.NAME].get('entities')[id]).map(item => ({
    ...item,
    author: item.author.username,
    category: item.category.title,
    role: item.role.title,
  })),
  isLoading: state[types.NAME].get('isLoading'),
  isLoaded: state[types.NAME].get('isLoaded'),
}), { fetchNews: actions.fetchList, deleteNews: actions.deleteObj })(List);
