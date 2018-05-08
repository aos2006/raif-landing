import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

  componentDidMount () {
    this.props.fetchList(1);
  }

  render () {
    console.log(this.props);
    if (!this.props.isLoaded) return <Loader/>

    return (
      <div>
        <DataList
          {...this.props}
          columns={this.props.columns}
          data={this.props.list}
          createPath={this.props.createPath}
          viewPath={this.props.viewPath}
          updatePath={this.props.updatePath}
          onDelete={col => this.props.remove(col)}
          pagination={this.state.pagination}
          loading={this.props.isLoading}
          onChange={({ current }) => this.props.fetchList(current)}
        />
      </div>
    )
  }
}

export default List;
